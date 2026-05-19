const CACHE_KEY_FACTIONS = "occultusFactionsCache";
const CACHE_KEY_COMPANIES = "occultusCompaniesCache";

function getCache(key) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function setCache(key, data) {
  localStorage.setItem(
    key,
    JSON.stringify({
      updatedAt: Date.now(),
      data
    })
  );
}

function isStale(cache, maxAgeMs = 86400000) {
  if (!cache || !cache.updatedAt) return true;
  return Date.now() - cache.updatedAt > maxAgeMs;
}

/* -----------------------------
   FACTION REFRESH
------------------------------*/
async function refreshFactionsIfNeeded(force = false) {
  const cached = getCache(CACHE_KEY_FACTIONS);

  if (!force && !isStale(cached)) {
    return cached.data;
  }

  const res = await fetch(
    "/api/faction-cache?refresh=1"
  );

  const json = await res.json();

  setCache(CACHE_KEY_FACTIONS, json);

  return json;
}

/* -----------------------------
   COMPANY REFRESH (wrapper)
------------------------------*/
async function refreshCompaniesIfNeeded(force = false) {
  const cached = getCache(CACHE_KEY_COMPANIES);

  if (!force && !isStale(cached)) {
    return cached.data;
  }

  const res = await fetch("/api/company-refresh");
  const json = await res.json();

  setCache(CACHE_KEY_COMPANIES, json);

  return json;
}