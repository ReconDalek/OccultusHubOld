const SESSION_KEY = "occultusSession";

/* -----------------------------
   SESSION STORAGE HELPERS
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

/* -----------------------------
   APPLY UI SESSION STATE
------------------------------*/

function applySession(user) {
  const welcome = document.getElementById("welcomeContainer");
  const text = document.getElementById("welcomeText");
  const loginBtn = document.getElementById("loginBtn");

  if (welcome) welcome.classList.remove("hidden");
  if (text) text.textContent = user.username;

  if (loginBtn) loginBtn.style.display = "none";
}

/* -----------------------------
   RESET UI STATE
------------------------------*/

function clearSessionUI() {
  const welcome = document.getElementById("welcomeContainer");
  const loginBtn = document.getElementById("loginBtn");

  if (welcome) welcome.classList.add("hidden");
  if (loginBtn) loginBtn.style.display = "inline-block";
}

/* -----------------------------
   LOGIN
------------------------------*/

async function authenticateUser(apiKey, rememberMe, stayLoggedIn) {
  const status = document.getElementById("loginStatus");

  try {
    status.textContent = "Authenticating...";

    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        apiKey,
        rememberMe,
        stayLoggedIn
      })
    });

    let data;
    try {
      data = await res.json();
    } catch {
      throw new Error("Invalid server response");
    }

    if (!res.ok) {
      status.textContent = data.error || "Login failed.";
      return;
    }

    setSessionToken(data.token);
    applySession(data.user);

    const modal = document.getElementById("loginModal");
    if (modal) modal.classList.add("hidden");

    status.textContent = "";

  } catch (err) {
    console.error(err);
    status.textContent = "Network error.";
  }
}

/* -----------------------------
   SESSION VALIDATION
------------------------------*/

async function checkSession() {
  const token = getSessionToken();
  if (!token) return;

  try {
    const res = await fetch("api/auth/session", {
      headers: { Authorization: token }
    });

    const data = await res.json();

    if (!data.valid) {
      clearSessionToken();
      clearSessionUI();
      return;
    }

    applySession(data.user);

  } catch (err) {
    console.error("Session check failed:", err);
    clearSessionToken();
    clearSessionUI();
  }
}

/* -----------------------------
   LOGOUT
------------------------------*/

async function logout() {
  const token = getSessionToken();

  try {
    await fetch("api/auth/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token })
    });
  } catch (e) {
    console.error(e);
  }

  clearSessionToken();
  clearSessionUI();

  location.reload();
}

/* -----------------------------
   EVENT BOOTSTRAP
------------------------------*/

window.addEventListener("DOMContentLoaded", () => {
  checkSession();

  const submit = document.getElementById("submitLogin");
  const input = document.getElementById("apiKeyInput");

  if (submit && input) {
    submit.onclick = () => {
      const apiKey = input.value.trim();
      if (!apiKey) return;

      const rememberMe = document.getElementById("rememberMe")?.checked || false;
      const stayLoggedIn = document.getElementById("stayLoggedIn")?.checked || false;

      authenticateUser(apiKey, rememberMe, stayLoggedIn);
    };
  }

  const logoutBtn = document.getElementById("logoutBtn");
  if (logoutBtn) {
    logoutBtn.onclick = logout;
  }
});