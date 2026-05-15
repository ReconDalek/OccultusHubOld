const API_KEY_URL =
  "https://api.torn.com/v2/key/info?comment=OccSite";

const USER_URL =
  "https://api.torn.com/v2/user?selections=basic,faction&comment=OccSite";

async function authenticateUser(apiKey) {
  try {
    const loginStatus = document.getElementById("loginStatus");
    if (loginStatus) loginStatus.textContent = "Authenticating...";

    // KEY CHECK
    const keyRes = await fetch(API_KEY_URL, {
      headers: {
        Authorization: `ApiKey ${apiKey}`,
        accept: "application/json"
      }
    });

    const keyData = await keyRes.json();
    if (!keyData.info) throw new Error("Invalid key response");

    const accessLevel = keyData.info.access.level;
    const userId = keyData.info.user.id;
    const factionId = keyData.info.user.faction_id;

    if (accessLevel < 3) {
      if (loginStatus) loginStatus.textContent = "Limited API key required minimum";
      return;
    }

    // USER DATA
    const userRes = await fetch(USER_URL, {
      headers: {
        Authorization: `ApiKey ${apiKey}`,
        accept: "application/json"
      }
    });

    const userData = await userRes.json();

    const name = userData.profile.name;
    const factionPosition = userData.faction.position;

    const isFactionMember =
      OCCULTUS_CONFIG.allowedFactionIds.includes(factionId);

    const isLeader =
      isFactionMember &&
      OCCULTUS_CONFIG.leadershipRoles.includes(factionPosition);

    const session = {
      apiKey,
      userId,
      name,
      factionId,
      factionPosition,
      isFactionMember,
      isLeader,
      accessLevel,
      timestamp: Date.now()
    };

    localStorage.setItem("occultusSession", JSON.stringify(session));
    cacheCompanyData(apiKey);

    applySession(session);

    const modal = document.getElementById("loginModal");
    if (modal) modal.classList.add("hidden");

    if (loginStatus) loginStatus.textContent = "";

    return session;

  } catch (err) {
    console.error(err);
    const loginStatus = document.getElementById("loginStatus");
    if (loginStatus) loginStatus.textContent = "Login failed.";
  }
}

function getSession() {
  const raw = localStorage.getItem("occultusSession");
  return raw ? JSON.parse(raw) : null;
}

function logout() {
  localStorage.removeItem("occultusSession");
  location.reload();
}

function applySession(session) {

  const modal =
    document.getElementById("loginModal");

  if (modal) {
    modal.classList.add("hidden");
  }

  // FORCE NAV REFRESH
  if (typeof updateNavigation === "function") {
    updateNavigation();
  }

}

async function cacheCompanyData(apiKey) {

  try {

    const companies = [];

    for (const companyId of OCCULTUS_CONFIG.companyIds) {

      const response = await fetch(
        `https://api.torn.com/v2/company?selections=profile,employees&id=${companyId}&comment=OccSite`,
        {
          headers: {
            Authorization: `ApiKey ${apiKey}`,
            accept: "application/json"
          }
        }
      );

      const data = await response.json();

      companies.push(data);

    }

    localStorage.setItem(
      "occultusCompanies",
      JSON.stringify({
        timestamp: Date.now(),
        companies
      })
    );

  } catch (err) {

    console.error("Company cache failed:", err);

  }

}




// AUTO INIT
window.addEventListener("DOMContentLoaded", () => {

  const session = getSession();

  if (session) {
    applySession(session);
  }

  const submit =
    document.getElementById("submitLogin");

  const input =
    document.getElementById("apiKeyInput");

  if (submit && input) {

    submit.onclick = () => {

      const key = input.value.trim();

      if (!key) return;

      authenticateUser(key);

    };

  }

});