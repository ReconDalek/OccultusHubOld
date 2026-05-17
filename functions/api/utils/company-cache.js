import { getRandomKey } from "./torn";

export async function onRequestGet({ env }) {
  const cached = await env.DB.prepare(
    `SELECT * FROM company_cache ORDER BY updated_at DESC`
  ).all();

  const stale = cached.results.length === 0 ||
    Date.now() - new Date(cached.results[0].updated_at).getTime() > 86400000;

  if (!stale) {
    return Response.json({
      cached: true,
      data: cached.results.map(r => JSON.parse(r.data))
    });
  }

  const key = await getRandomKey(env);

  const companies = [];

  for (const id of [112941,120244,121745,122254,120502,124650]) {
    const res = await fetch(
      `https://api.torn.com/v2/company?selections=profile,employees&id=${id}`,
      {
        headers: {
          Authorization: `ApiKey ${key}`
        }
      }
    );

    const data = await res.json();

    companies.push(data);

    await env.DB.prepare(
      `
      INSERT OR REPLACE INTO company_cache (company_id, data, updated_at)
      VALUES (?, ?, datetime('now'))
      `,
      [id, JSON.stringify(data)]
    ).run();
  }

  return Response.json({ cached: false, companies });
}