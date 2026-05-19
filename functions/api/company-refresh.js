import { getRandomKey } from "../utils/torn";

const COMPANY_IDS = [
  112941,
  120244,
  121745,
  122254,
  120502,
  124650
];

const CACHE_MAX_AGE = 24 * 60 * 60 * 1000;

export async function onRequestGet({ env }) {
  try {

    // CHECK MOST RECENT UPDATE
    const latest = await env.DB.prepare(`
      SELECT updated_at
      FROM company_cache
      ORDER BY updated_at DESC
      LIMIT 1
    `).first();

    const isStale =
      !latest ||
      (Date.now() - new Date(latest.updated_at).getTime()) >
        CACHE_MAX_AGE;

    if (!isStale) {
      return Response.json({
        updated: false,
        message: "Company cache still fresh."
      });
    }

    // GET SHARED API KEY
    const apiKey = await getRandomKey(env);

    if (!apiKey) {
      throw new Error("No API keys available.");
    }

    // REFRESH COMPANIES
    for (const companyId of COMPANY_IDS) {

      const response = await fetch(
        `https://api.torn.com/v2/company/${companyId}?selections=profile,employees`,
        {
          headers: {
            Authorization: `ApiKey ${apiKey}`
          }
        }
      );

      const companyData = await response.json();

      await env.DB.prepare(`
        INSERT INTO company_cache (
          company_id,
          data,
          updated_at
        )
        VALUES (?, ?, datetime('now'))

        ON CONFLICT(company_id)
        DO UPDATE SET
          data = excluded.data,
          updated_at = datetime('now')
      `)
      .bind(
        companyId,
        JSON.stringify(companyData)
      )
      .run();
    }

    return Response.json({
      updated: true
    });

  } catch (error) {

    return Response.json({
      updated: false,
      error: error.message
    }, {
      status: 500
    });

  }
}