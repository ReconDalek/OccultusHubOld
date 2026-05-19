import { getRandomKey } from "./torn";

const FACTION_IDS = [33097, 9728, 9171];

export async function onRequestGet({ env }) {
  const cached = await env.DB.prepare(
    `SELECT * FROM faction_cache ORDER BY updated_at DESC`
  ).all();

  const stale =
    cached.results.length === 0 ||
    Date.now() - new Date(cached.results[0].updated_at).getTime() > 86400000;

  if (!stale) {
    return Response.json({
      cached: true,
      data: cached.results.map(r => JSON.parse(r.data))
    });
  }

  const key = await getRandomKey(env);

  const factions = [];

  for (const id of FACTION_IDS) {
    const res = await fetch(
      `https://api.torn.com/v2/faction?selections=basic,members&id=${id}`,
      {
        headers: {
          Authorization: `ApiKey ${key}`
        }
      }
    );

    const data = await res.json();
    factions.push(data);

    await env.DB.prepare(
      `
      INSERT OR REPLACE INTO faction_cache (faction_id, data, updated_at)
      VALUES (?, ?, datetime('now'))
      `
    )
      .bind(id, JSON.stringify(data))
      .run();
  }

  return Response.json({
    cached: false,
    data: factions
  });
}