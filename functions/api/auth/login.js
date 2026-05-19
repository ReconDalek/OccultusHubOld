import { encrypt } from "../../utils/crypto";
import { generateToken, sessionExpiry } from "../../utils/session";

export async function onRequestPost(context) {
  const { env, request } = context;
  
  try {
    const body = await request.json();
    const { apiKey, rememberMe, stayLoggedIn } = body;

    if (!apiKey) {
      return new Response(JSON.stringify({ error: "Missing API key" }), { 
        status: 400, 
        headers: { "Content-Type": "application/json" } 
      });
    }

    // 1. Check Key Info
    const keyCheck = await fetch(
      "https://api.torn.com/v2/key/info?comment=OccSite",
      { headers: { Authorization: `ApiKey ${apiKey}` } }
    );
    const keyData = await keyCheck.json();

    if (!keyData?.info) {
      return new Response(JSON.stringify({ error: "Invalid API key" }), { 
        status: 401, 
        headers: { "Content-Type": "application/json" } 
      });
    }

    const userId = keyData.info.user?.id;
    const accessLevel = keyData.info.access?.level;

    // 2. Fetch User Data
    const userRes = await fetch(
      "https://api.torn.com/v2/user?selections=basic,faction",
      { headers: { Authorization: `ApiKey ${apiKey}` } }
    );
    const userData = await userRes.json();

    // Defensive programming against Torn API v2 structure changes
    const username = userData?.profile?.name || userData?.basic?.name || "Unknown User";
    const factionId = userData?.faction?.id || userData?.faction?.faction_id || 0;
    const factionPosition = userData?.faction?.position || "Member";

    // 3. Encrypt API Key
    if (!env.OCCULTUS_SECRET) {
      throw new Error("Missing OCCULTUS_SECRET environment variable");
    }
    const encrypted = await encrypt(apiKey, env.OCCULTUS_SECRET);

    // 4. UPSERT USER into D1
    if (!env.DB) {
      throw new Error("D1 Database binding 'DB' is undefined.");
    }

    await env.DB.prepare(
      `
      INSERT INTO users (
        torn_user_id,
        username,
        faction_id,
        faction_position,
        encrypted_api_key,
        encryption_iv,
        access_level,
        last_login,
        updated_at
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, datetime('now'), datetime('now'))
      ON CONFLICT(torn_user_id)
      DO UPDATE SET
        username=excluded.username,
        faction_id=excluded.faction_id,
        faction_position=excluded.faction_position,
        encrypted_api_key=excluded.encrypted_api_key,
        encryption_iv=excluded.encryption_iv,
        access_level=excluded.access_level,
        last_login=datetime('now'),
        updated_at=datetime('now')
      `
    ).bind(
      userId,
      username,
      factionId,
      factionPosition,
      encrypted.data,
      encrypted.iv,
      accessLevel
    ).run();

    // 5. Create Session
    const token = generateToken();
    const expiresAt = sessionExpiry(stayLoggedIn);

    await env.DB.prepare(
      `
      INSERT INTO sessions (token, torn_user_id, expires_at, remember_me)
      VALUES (?, ?, ?, ?)
      `
    ).bind(token, userId, expiresAt, rememberMe ? 1 : 0).run();

    // Trigger company refresh in background
    try {
      fetch(new URL("/api/company-refresh", request.url), {
        method: "GET"
      }).catch(() => {});
    } catch (_) {}

    // Success Response
    return new Response(JSON.stringify({
      token,
      user: {
        userId,
        username,
        factionId,
        factionPosition
      }
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    });

  } catch (error) {
    // This catch block prevents the generic 500 error and returns the actual issue!
    return new Response(JSON.stringify({ 
      error: "Internal Server Error", 
      details: error.message,
      stack: error.stack 
    }), { 
      status: 500, 
      headers: { "Content-Type": "application/json" } 
    });
  }
}