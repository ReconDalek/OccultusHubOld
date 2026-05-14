window.addEventListener("DOMContentLoaded", () => {

  const loginBtn =
    document.getElementById("loginBtn");

  const loginModal =
    document.getElementById("loginModal");

  const closeModal =
    document.getElementById("closeModal");

  if (loginBtn && loginModal) {

    loginBtn.addEventListener("click", () => {
      loginModal.classList.remove("hidden");
    });

  }

  if (closeModal && loginModal) {

    closeModal.addEventListener("click", () => {
      loginModal.classList.add("hidden");
    });

  }

  window.addEventListener("click", (event) => {

    if (event.target === loginModal) {
      loginModal.classList.add("hidden");
    }

  });

});