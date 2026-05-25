const DEFAULT_PROFILE_IMAGE =
  "https://www.torn.com/images/profile_man.jpg";

function getSession() {

  if (
    window.getUserSession
  ) {
    return window.getUserSession();
  }

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

function setSafeImage(
  imgElement,
  src
) {

  if (!imgElement) return;

  imgElement.src =
    src ||
    DEFAULT_PROFILE_IMAGE;

  imgElement.onerror =
    () => {

      imgElement.onerror =
        null;

      imgElement.src =
        DEFAULT_PROFILE_IMAGE;
    };
}

function updateNavigation() {

  const session =
    getSession() ||
    window.__occultusSessionCache ||
    null;

  window.__occultusSessionCache =
    session;

  const navCenter =
    document.querySelector(
      ".nav-center"
    );

  const loginBtn =
    document.getElementById(
      "loginBtn"
    );

  const memberContainer =
    document.getElementById(
      "memberCardContainer"
    );

  const avatar =
    document.getElementById(
      "memberAvatar"
    );

  const dropdownAvatar =
    document.getElementById(
      "memberDropdownAvatar"
    );

  const memberName =
    document.getElementById(
      "memberName"
    );

  const memberRole =
    document.getElementById(
      "memberRole"
    );

  const memberFaction =
    document.getElementById(
      "memberFaction"
    );

  const dropdown =
    document.getElementById(
      "memberDropdown"
    );

  const memberBtn =
    document.getElementById(
      "memberCardBtn"
    );

  if (!navCenter) return;

  renderNavLinks(
    navCenter,
    session
  );

  /* -----------------------------
    ENSURE TOGGLE IS BOUND ONCE
  ------------------------------*/

  if (
    memberBtn &&
    dropdown &&
    !memberBtn.dataset.bound
  ) {

    memberBtn.addEventListener(
      "click",
      (e) => {

        e.preventDefault();
        e.stopPropagation();

        dropdown.classList.toggle(
          "hidden"
        );
      },
      true
    );

    dropdown.addEventListener(
      "click",
      (e) => {
        e.stopPropagation();
      }
    );

    document.addEventListener(
      "click",
      (e) => {

        const clickedInside =
          memberBtn.contains(
            e.target
          ) ||
          dropdown.contains(
            e.target
          );

        if (!clickedInside) {
          dropdown.classList.add(
            "hidden"
          );
        }
      },
      true
    );

    memberBtn.dataset.bound =
      "true";
  }

  /* -----------------------------
     NOT LOGGED IN
  ------------------------------*/
  if (!session) {

    if (loginBtn) {
      loginBtn.classList.remove(
        "hidden"
      );
    }

    if (memberContainer) {
      memberContainer.classList.add(
        "hidden"
      );
    }

    if (dropdown) {
      dropdown.classList.add(
        "hidden"
      );
    }

    return;
  }

  /* -----------------------------
     LOGGED IN
  ------------------------------*/
  if (loginBtn) {
    loginBtn.classList.add(
      "hidden"
    );
  }

  if (memberContainer) {
    memberContainer.classList.remove(
      "hidden"
    );
  }

  const factionNames = {
    33097: "Occultus",
    9728: "Occul2us",
    9171: "Occul3us"
  };

  const image =
    session.image ||
    DEFAULT_PROFILE_IMAGE;

  setSafeImage(
    avatar,
    image
  );

  setSafeImage(
    dropdownAvatar,
    image
  );

  if (memberName) {
    memberName.textContent =
      session.username ||
      "Unknown User";
  }

  if (memberRole) {
    memberRole.textContent =
      session.factionPosition ||
      "Visitor";
  }

  if (memberFaction) {
    memberFaction.textContent =
      factionNames[
        Number(
          session.factionId
        )
      ] || "Visitor";
  }
}

window.addEventListener(
  "DOMContentLoaded",
  updateNavigation
);

window.updateNavigation =
  updateNavigation;