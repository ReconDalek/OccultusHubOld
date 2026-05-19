function getSession() {

  const raw =
    localStorage.getItem(
      "occultusUser"
    );

  return raw
    ? JSON.parse(raw)
    : null;
}

function getAccessLevel(
  session
) {

  if (!session) {
    return "guest";
  }

  if (
    session.isLeader
  ) {
    return "leadership";
  }

  if (
    session.isFactionMember
  ) {
    return "member";
  }

  return "guest";
}

function enforcePageAccess(
  requiredLevel
) {

  const session =
    getSession();

  const level =
    getAccessLevel(
      session
    );

  if (
    requiredLevel ===
      "member" &&
    level === "guest"
  ) {
    window.location.href =
      "index.html";
  }

  if (
    requiredLevel ===
      "leadership" &&
    level !==
      "leadership"
  ) {
    window.location.href =
      "index.html";
  }
}

function highlightUserFaction() {

  const session =
    getSession();

  if (!session) return;

  const cards =
    document.querySelectorAll(
      ".faction-card"
    );

  cards.forEach(card => {

    const factionId =
      Number(
        card.dataset
          .faction
      );

    if (
      Number(
        session.factionId
      ) === factionId
    ) {
      card.classList.add(
        "active-faction"
      );
    }
  });
}

window.addEventListener(
  "DOMContentLoaded",
  () => {

    highlightUserFaction();
  }
);