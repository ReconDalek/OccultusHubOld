const SESSION_KEY = "occultusSession";
const USER_KEY = "occultusUser";
const DEV_AUTH_ENABLED = true;

/* -----------------------------
   STORAGE HELPERS
------------------------------*/

function getSessionToken() {
  return localStorage.getItem(SESSION_KEY);
}

function setSessionToken(token) {
  localStorage.setItem(SESSION_KEY, token);
}

function clearSessionToken() {
  localStorage.removeItem(SESSION_KEY);
}

function setUserSession(user) {
  localStorage.setItem(
    USER_KEY,
    JSON.stringify(user)
  );
}

function getUserSession() {
  const raw =
    localStorage.getItem(USER_KEY);

  return raw
    ? JSON.parse(raw)
    : null;
}

function clearUserSession() {
  localStorage.removeItem(USER_KEY);
}

/* -----------------------------
   ACCESS HELPERS
------------------------------*/

function enrichUserAccess(user) {

  const isFactionMember =
    OCCULTUS_CONFIG.allowedFactionIds.includes(
      Number(user.factionId)
    );

  const isLeader =
    isFactionMember &&
    OCCULTUS_CONFIG.leadershipRoles.includes(
      user.factionPosition
    );

  return {
    ...user,
    isFactionMember,
    isLeader
  };
}

/* -----------------------------
   COMPANY CACHE REFRESH
------------------------------*/

async function triggerCompanyRefresh() {

  try {

    fetch("/api/company-refresh")
      .catch(() => {});

  } catch (err) {

    console.error(
      "Company refresh failed:",
      err
    );

  }

}

/* -----------------------------
   APPLY UI SESSION STATE
------------------------------*/

function applySession(user) {

  const enrichedUser =
    enrichUserAccess(user);

  setUserSession(enrichedUser);

  const welcome =
    document.getElementById(
      "welcomeContainer"
    );

  const text =
    document.getElementById(
      "welcomeText"
    );

  const loginBtn =
    document.getElementById(
      "loginBtn"
    );

  if (welcome) {
    welcome.classList.remove("hidden");
  }

  if (text) {
    text.textContent =
      `${enrichedUser.username} • ${enrichedUser.factionPosition || "Visitor"}`;
  }

  if (loginBtn) {
    loginBtn.classList.add("hidden");
  }

  // refresh nav everywhere
  if (
    typeof updateNavigation ===
    "function"
  ) {
    updateNavigation();
  }
}

/* -----------------------------
   RESET UI
------------------------------*/

function clearSessionUI() {

  clearSessionToken();
  clearUserSession();

  const welcome =
    document.getElementById(
      "welcomeContainer"
    );

  const loginBtn =
    document.getElementById(
      "loginBtn"
    );

  if (welcome) {
    welcome.classList.add("hidden");
  }

  if (loginBtn) {
    loginBtn.classList.remove("hidden");
  }

  // reset cached session properly
  window.__occultusSessionCache = null;

  // refresh nav safely
  if (typeof updateNavigation === "function") {
    updateNavigation();
  }
}

/* -----------------------------
   LOGIN
------------------------------*/

async function authenticateUser(
  apiKey,
  rememberMe,
  stayLoggedIn
) {

  const isLocalhost =
    window.location.hostname === "127.0.0.1" ||
    window.location.hostname === "localhost";

  if (isLocalhost && window.__devAuthAvailable) {

    const devUser = {
      userId: 99999999,
      username: "Recon_Dev",
      factionId: 33097,
      factionPosition: "Leader",
      isFactionMember: true,
      isLeader: true,
      image: null
    };

    localStorage.setItem("occultusSession", "dev-token");
    localStorage.setItem("occultusUser", JSON.stringify(devUser));

    applySession(devUser);

    const modal =
      document.getElementById("loginModal");

    if (modal) {
      modal.classList.add("hidden");
    }

    return;
  }

  const status =
    document.getElementById(
      "loginStatus"
    );

  try {

    status.textContent =
      "Authenticating...";

    const res = await fetch(
      "/api/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json"
        },
        body: JSON.stringify({
          apiKey,
          rememberMe,
          stayLoggedIn
        })
      }
    );

    let data;

    try {
      data = await res.json();
    } catch {
      throw new Error(
        "Invalid server response"
      );
    }

    if (!res.ok) {
      status.textContent =
        data.error ||
        "Login failed.";
      return;
    }

    setSessionToken(data.token);
    applySession(data.user);
    triggerCompanyRefresh();

    const modal =
      document.getElementById(
        "loginModal"
      );

    if (modal) {
      modal.classList.add(
        "hidden"
      );
    }

    status.textContent = "";

  } catch (err) {

    console.error(err);

    status.textContent =
      "Network error.";
  }
}

/* -----------------------------
   SESSION VALIDATION
------------------------------*/

async function checkSession() {

  const isLocalhost =
    window.location.hostname === "127.0.0.1" ||
    window.location.hostname === "localhost";

  const token = getSessionToken();

  // NORMAL SESSION FLOW (real users or existing dev session)
  if (token) {

    try {

      const res = await fetch(
        "/api/auth/session",
        {
          headers: {
            Authorization: token
          }
        }
      );

      const data = await res.json();

      if (!data.valid) {
        clearSessionUI();
        return;
      }

      applySession(data.user);
      triggerCompanyRefresh();

    } catch (err) {

      console.error("Session check failed:", err);
      clearSessionUI();
    }

    return;
  }

  // IMPORTANT CHANGE:
  // DO NOT auto-login on localhost anymore
  // Only store a flag so login button can use dev mode
  if (isLocalhost && DEV_AUTH_ENABLED) {

    window.__devAuthAvailable = true;
    console.warn("DEV AUTH AVAILABLE (click login to use)");
  }
}

/* -----------------------------
   LOGOUT
------------------------------*/

async function logout() {

  const token = getSessionToken();

  try {
    await fetch("/api/auth/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ token })
    });
  } catch (e) {
    console.error(e);
  }

  clearSessionUI();

  // optional but clean hard reset
  window.location.href = "/";
}

/* -----------------------------
   EVENT BOOTSTRAP
------------------------------*/

window.addEventListener(
  "DOMContentLoaded",
  () => {

    checkSession();

    const submit =
      document.getElementById(
        "submitLogin"
      );

    const input =
      document.getElementById(
        "apiKeyInput"
      );

    if (submit && input) {

      submit.onclick = () => {

        const apiKey =
          input.value.trim();

        if (!apiKey) return;

        const rememberMe =
          document.getElementById(
            "rememberMe"
          )?.checked || false;

        const stayLoggedIn =
          document.getElementById(
            "stayLoggedIn"
          )?.checked || false;

        authenticateUser(
          apiKey,
          rememberMe,
          stayLoggedIn
        );
      };
    }

    const logoutBtn =
      document.getElementById(
        "logoutBtn"
      );

    if (logoutBtn) {
      logoutBtn.onclick =
        logout;
    }
  }
);

window.getUserSession = getUserSession;
window.checkSession = checkSession;
window.enrichUserAccess = enrichUserAccess;