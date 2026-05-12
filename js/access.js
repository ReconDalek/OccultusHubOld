function getSession() {
  const raw = localStorage.getItem("occultusSession");
  return raw ? JSON.parse(raw) : null;
}

/**
 * ACCESS LEVELS:
 * guest → not logged in
 * member → valid faction
 * leadership → special roles
 */

function getAccessLevel(session) {

  if (!session) return "guest";

  const isFactionMember =
    OCCULTUS_CONFIG.allowedFactionIds.includes(
      session.factionId
    );

  const isLeader =
    OCCULTUS_CONFIG.leadershipRoles.includes(
      session.factionPosition
    );

  if (isLeader && isFactionMember) {
    return "leadership";
  }

  if (isFactionMember) {
    return "member";
  }

  return "guest";
}

/**
 * PROTECTED PAGE GUARD
 */
function enforcePageAccess(requiredLevel) {

  const session = getSession();
  const level = getAccessLevel(session);

  if (requiredLevel === "member" && level === "guest") {
    window.location.href = "index.html";
  }

  if (requiredLevel === "leadership" && level !== "leadership") {
    window.location.href = "index.html";
  }
}

/**
 * FACTION HIGHLIGHTING SYSTEM
 */
function highlightUserFaction() {

  const session = getSession();
  if (!session) return;

  const cards = document.querySelectorAll(".faction-card");

  cards.forEach(card => {

    const factionId = Number(card.dataset.faction);

    if (session.factionId === factionId) {
      card.classList.add("active-faction");
    }

  });

}

window.addEventListener("DOMContentLoaded", () => {

  highlightUserFaction();

});