document.addEventListener("DOMContentLoaded", function () {

  /* =========================
     Experience Preview Toggle
     ========================= */

  const sneakPeekBtn = document.querySelector("#sneak-peek-btn");
  const previewSection = document.querySelector("#experience-preview");

  if (sneakPeekBtn && previewSection) {

    sneakPeekBtn.addEventListener("click", function () {

      const isExpanded = sneakPeekBtn.getAttribute("aria-expanded") === "true";

      /* toggle visibility */
      previewSection.classList.toggle("hidden");

      /* update accessibility state */
      sneakPeekBtn.setAttribute("aria-expanded", !isExpanded);
    });
  }

  /* =========================
     Mobile Navigation Toggle
     ========================= */

  const nav = document.querySelector("#siteNav");
  const navToggle = document.querySelector("#navToggle");

  if (nav && navToggle) {

    navToggle.addEventListener("click", function () {

      const isOpen = nav.classList.toggle("nav--open");

      /* update aria state */
      navToggle.setAttribute("aria-expanded", isOpen);

    });

  }

});
