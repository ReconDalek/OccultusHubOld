export async function onRequestGet({ env }) {

  const companies = await env.DB.prepare(`
    SELECT company_id, data, updated_at
    FROM company_cache
    ORDER BY company_id
  `).all();

  if (!companies.results.length) {
    return Response.json({
      companies: [],
      lastUpdated: null
    });
  }

  const parsed = companies.results.map(row =>
    JSON.parse(row.data)
  );

  const latest =
    companies.results
      .map(x => x.updated_at)
      .sort()
      .reverse()[0];

  return Response.json({
    companies: parsed,
    lastUpdated: latest
  });
}