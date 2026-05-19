function getFactionCache() {
  const raw = localStorage.getItem("occultusFactions");
  if (!raw) return [];
  return JSON.parse(raw).data || [];
}

function setFactionCache(data) {
  localStorage.setItem(
    "occultusFactions",
    JSON.stringify({
      data,
      updatedAt: Date.now()
    })
  );
}

async function fetchFactions() {
  try {
    const res = await fetch("/api/faction-cache");
    const json = await res.json();

    if (json.data) {
      setFactionCache(json.data);
      return json.data;
    }

    return getFactionCache();
  } catch (err) {
    console.error("Faction fetch failed:", err);
    return getFactionCache();
  }
}

function buildFactionCard(faction) {
  const basic = faction.basic;
  const members = faction.members || [];

  return `
    <div class="faction-card expandable" data-faction="${basic.id}">

      <h3>${basic.name}</h3>

      <p>${basic.tag}</p>

      <div class="faction-meta">
        Members: ${basic.members} / ${basic.capacity}
      </div>

      <div class="faction-meta">
        Rank: ${basic.rank?.name || "Unknown"}
      </div>

      <div class="faction-meta">
        Respect: ${basic.respect.toLocaleString()}
      </div>

      <div class="faction-details hidden">

        <h4>Members</h4>

        <div class="member-list">

          ${members.map(m => `
            <div class="member-row">

              <a href="https://www.torn.com/profiles.php?XID=${m.id}" target="_blank">
                ${m.name}
              </a>

              <span>${m.position}</span>

              <span>${m.last_action?.relative || ""}</span>

            </div>
          `).join("")}

        </div>

      </div>

    </div>
  `;
}

function updateLastUpdated() {
  const panel = document.getElementById("factionLastUpdated");
  const cached = getFactionCache();

  if (!panel || !cached) return;

  panel.textContent =
    "Last updated: " +
    new Date(cached.updatedAt).toLocaleString();
}

function renderFactions(factions) {
  const grid = document.querySelector(".faction-grid");
  if (!grid) return;

  grid.innerHTML = factions.map(buildFactionCard).join("");

  setupFactionExpansion();
  updateLastUpdated();
}

function setupFactionExpansion() {
  const cards = document.querySelectorAll(".faction-card.expandable");

  cards.forEach(card => {
    card.addEventListener("click", () => {
      const details = card.querySelector(".faction-details");
      if (!details) return;

      details.classList.toggle("hidden");
      card.classList.toggle("expanded");
    });
  });
}

async function initFactions() {
  const data = await fetchFactions();
  renderFactions(data);
}

window.addEventListener("DOMContentLoaded", initFactions);