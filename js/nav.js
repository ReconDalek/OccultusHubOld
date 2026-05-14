function getSession() {
  const raw = localStorage.getItem("occultusSession");
  return raw ? JSON.parse(raw) : null;
}

function updateNavigation() {

  const session = getSession();

  const navCenter =
    document.querySelector(".nav-center");

  const loginBtn =
    document.getElementById("loginBtn");

  const welcomeContainer =
    document.getElementById("welcomeContainer");

  const welcomeText =
    document.getElementById("welcomeText");

  const leadershipLink =
    document.getElementById("leadershipLink");

  const factionsLink =
    document.getElementById("factionsLink");

  if (!navCenter) return;

  // DEFAULT STATE
  if (factionsLink) {
    factionsLink.style.display = "inline-block";
  }

  if (leadershipLink) {
    leadershipLink.style.display = "none";
  }

  if (loginBtn) {
    loginBtn.classList.remove("hidden");
  }

  if (welcomeContainer) {
    welcomeContainer.classList.add("hidden");
  }

  // NOT LOGGED IN
  if (!session) {
    return;
  }

  // LOGGED IN
  if (loginBtn) {
    loginBtn.classList.add("hidden");
  }

  if (welcomeContainer) {
    welcomeContainer.classList.remove("hidden");
  }

  let rank = "Visitor";

  if (session.isLeader) {
    rank = "Leadership";
  } else if (session.isFactionMember) {
    rank = "Member";
  }

  if (welcomeText) {
    welcomeText.textContent =
      `${session.name} • ${rank}`;
  }

  // FACTION MEMBER NAV
  if (session.isFactionMember) {

    if (factionsLink) {
      factionsLink.style.display = "inline-block";
    }

    // LEADERSHIP NAV
    if (session.isLeader && leadershipLink) {
      leadershipLink.style.display = "inline-block";
    }

  }

  const logoutBtn =
    document.getElementById("logoutBtn");

  if (logoutBtn) {
    logoutBtn.onclick = () => {
      localStorage.removeItem("occultusSession");
      location.reload();
    };
  }

}

window.addEventListener(
  "DOMContentLoaded",
  updateNavigation
);