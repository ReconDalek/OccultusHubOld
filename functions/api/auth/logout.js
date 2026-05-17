export async function onRequestPost({ request, env }) {
  const { token } = await request.json();

  await env.DB.prepare(
    `DELETE FROM sessions WHERE token = ?`
  ).bind(token).run();

  return Response.json({ success: true });
}