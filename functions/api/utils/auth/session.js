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

  return Response.json({
    valid: true,
    session,
    user
  });
}