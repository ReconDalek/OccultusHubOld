async function initLeadershipPage() {
  await checkSession();

  const user = getUserSession();

  const accessDenied = document.getElementById("accessDenied");
  const dashboard = document.getElementById("dashboard");

  if (!user || !user.isLeader) {
    accessDenied.style.display = "block";
    dashboard.style.display = "none";
    return;
  }

  accessDenied.style.display = "none";
  dashboard.style.display = "block";
}

window.addEventListener("DOMContentLoaded", initLeadershipPage);