import { encrypt } from "../utils/crypto";
import { generateToken, sessionExpiry } from "../utils/session";

export async function onRequestPost(context) {
  const { env, request } = context;
  const body = await request.json();

  const { apiKey, rememberMe, stayLoggedIn } = body;

  if (!apiKey) {
    return Response.json({ error: "Missing API key" }, { status: 400 });
  }

  const keyCheck = await fetch(
    "https://api.torn.com/v2/key/info?comment=OccSite",
    {
      headers: {
        Authorization: `ApiKey ${apiKey}`
      }
    }
  );

  const keyData = await keyCheck.json();

  if (!keyData?.info) {
    return Response.json({ error: "Invalid API key" }, { status: 401 });
  }

  const userId = keyData.info.user.id;
  const accessLevel = keyData.info.access.level;

  const userRes = await fetch(
    "https://api.torn.com/v2/user?selections=basic,faction",
    {
      headers: {
        Authorization: `ApiKey ${apiKey}`
      }
    }
  );

  const userData = await userRes.json();

  const username = userData.profile.name;
  const factionId = userData.faction.id;
  const factionPosition = userData.faction.position;

  const encrypted = await encrypt(apiKey, env.OCCULTUS_SECRET);

  // UPSERT USER
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
    `,
    [
      userId,
      username,
      factionId,
      factionPosition,
      encrypted.data,
      encrypted.iv,
      accessLevel
    ]
  ).run();

  const token = generateToken();
  const expiresAt = sessionExpiry(stayLoggedIn);

  await env.DB.prepare(
    `
    INSERT INTO sessions (token, torn_user_id, expires_at, remember_me)
    VALUES (?, ?, ?, ?)
    `,
    [token, userId, expiresAt, rememberMe ? 1 : 0]
  ).run();

  return Response.json({
    token,
    user: {
      userId,
      username,
      factionId,
      factionPosition
    }
  });
}