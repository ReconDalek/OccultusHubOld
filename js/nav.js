function getSession() {
  const raw = localStorage.getItem("occultusSession");
  return raw ? JSON.parse(raw) : null;
}

function buildNavLinks(session) {

  const links = [
    {
      label: "Home",
      href: "index.html"
    }
  ];

  // FACTION ACCESS
  if (session && session.isFactionMember) {

    links.push(
      {
        label: "Factions",
        href: "factions.html"
      },
      {
        label: "Companies",
        href: "companies.html"
      }
    );

  }

  // LEADERSHIP ACCESS
  if (session && session.isLeader) {

    links.push({
      label: "Leadership",
      href: "leadership.html"
    });

  }

  return links;
}

function renderNavLinks(navCenter, session) {

  const links = buildNavLinks(session);

  navCenter.innerHTML = links.map(link => `
    <a href="${link.href}">
      ${link.label}
    </a>
  `).join("");

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

  if (!navCenter) return;

  // BUILD NAV
  renderNavLinks(navCenter, session);

  // DEFAULT UI
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

  if (session.factionPosition) {
    rank = session.factionPosition;
  }

  if (welcomeText) {
    welcomeText.textContent =
      `${session.name} • ${rank}`;
  }

  const logoutBtn =
    document.getElementById("logoutBtn");

  if (logoutBtn) {

    logoutBtn.onclick = () => {

      localStorage.removeItem(
        "occultusSession"
      );

      location.reload();

    };

  }

}

window.addEventListener(
  "DOMContentLoaded",
  updateNavigation
);