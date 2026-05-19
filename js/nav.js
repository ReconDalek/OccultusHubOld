function getSession() {

  const raw =
    localStorage.getItem(
      "occultusUser"
    );

  return raw
    ? JSON.parse(raw)
    : null;
}

function buildNavLinks(session) {

  const links = [
    {
      label: "Home",
      href: "index.html"
    }
  ];

  if (
    session?.isFactionMember
  ) {

    links.push(
      {
        label: "Factions",
        href:
          "factions.html"
      },
      {
        label: "Companies",
        href:
          "companies.html"
      }
    );
  }

  if (
    session?.isLeader
  ) {

    links.push({
      label:
        "Leadership",
      href:
        "leadership.html"
    });
  }

  return links;
}

function renderNavLinks(
  navCenter,
  session
) {

  const links =
    buildNavLinks(session);

  navCenter.innerHTML =
    links.map(link => `
      <a href="${link.href}">
        ${link.label}
      </a>
    `).join("");
}

function updateNavigation() {

  const session =
    getSession();

  const navCenter =
    document.querySelector(
      ".nav-center"
    );

  const loginBtn =
    document.getElementById(
      "loginBtn"
    );

  const welcomeContainer =
    document.getElementById(
      "welcomeContainer"
    );

  const welcomeText =
    document.getElementById(
      "welcomeText"
    );

  if (!navCenter) return;

  renderNavLinks(
    navCenter,
    session
  );

  if (!session) {

    if (loginBtn) {
      loginBtn.classList.remove(
        "hidden"
      );
    }

    if (
      welcomeContainer
    ) {
      welcomeContainer.classList.add(
        "hidden"
      );
    }

    return;
  }

  if (loginBtn) {
    loginBtn.classList.add(
      "hidden"
    );
  }

  if (
    welcomeContainer
  ) {
    welcomeContainer.classList.remove(
      "hidden"
    );
  }

  if (
    welcomeText
  ) {
    welcomeText.textContent =
      `${session.username} • ${session.factionPosition}`;
  }
}

window.addEventListener(
  "DOMContentLoaded",
  updateNavigation
);