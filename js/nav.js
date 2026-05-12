function getSession() {
  const raw = localStorage.getItem("occultusSession");
  return raw ? JSON.parse(raw) : null;
}

document.addEventListener("DOMContentLoaded", () => {
  const session = getSession();

  const navCenter = document.querySelector(".nav-center");
  const userBox = document.querySelector(".nav-user");

  if (navCenter) {
    navCenter.style.display =
      session && session.isFactionMember ? "flex" : "none";
  }

  if (userBox) {
    if (!session) {
      userBox.innerHTML = `<button id="loginBtn">Login</button>`;
    } else {
      userBox.innerHTML = `
        <span>Welcome, ${session.name}</span>
        <button id="logoutBtn">Logout</button>
      `;

      document.getElementById("logoutBtn").onclick = () => {
        localStorage.removeItem("occultusSession");
        location.reload();
      };
    }
  }
});