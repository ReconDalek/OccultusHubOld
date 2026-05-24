export async function onRequestGet({ request, env }) {

  const token = request.headers.get("Authorization");

  if (!token) {
    return Response.json({ valid: false });
  }

  const session = await env.DB.prepare(
    `
    SELECT * FROM sessions
    WHERE token = ? AND datetime(expires_at) > datetime('now')
    `
  ).bind(token).first();

  if (!session) {
    return Response.json({ valid: false });
  }

  const user = await env.DB.prepare(
    `
    SELECT torn_user_id, username, faction_id, faction_position
    FROM users
    WHERE torn_user_id = ?
    `
  ).bind(session.torn_user_id).first();

  if (!user) {
    return Response.json({ valid: false });
  }

  // NORMALISE SHAPE FOR FRONTEND
  const normalisedUser = {
    userId: user.torn_user_id,
    username: user.username,
    factionId: user.faction_id,
    factionPosition: user.faction_position,
    image: user.image
  };

  return Response.json({
    valid: true,
    session: {
      token: session.token,
      expiresAt: session.expires_at,
      rememberMe: session.remember_me
    },
    user: normalisedUser
  });
}