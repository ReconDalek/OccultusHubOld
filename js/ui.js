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

  const memberBtn =
  document.getElementById(
    "memberCardBtn"
  );

const dropdown =
  document.getElementById(
    "memberDropdown"
  );

if (
  memberBtn &&
  dropdown
) {

  memberBtn.addEventListener(
    "click",
    (e) => {

      e.stopPropagation();

      dropdown.classList.toggle(
        "hidden"
      );
    }
  );

  document.addEventListener(
    "click",
    () => {

      dropdown.classList.add(
        "hidden"
      );
    }
  );

  dropdown.addEventListener(
    "click",
    (e) => {
      e.stopPropagation();
    }
  );
}

});