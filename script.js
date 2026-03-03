document.addEventListener("DOMContentLoaded", function () {

  const sneakPeekBtn = document.querySelector("#sneak-peek-btn");
  const previewSection = document.querySelector("#experience-preview");

  if (sneakPeekBtn && previewSection) {

    sneakPeekBtn.addEventListener("click", function () {

      const isExpanded = sneakPeekBtn.getAttribute("aria-expanded") === "true";

      // Toggle hidden class
      previewSection.classList.toggle("hidden");

      // Update aria-expanded for screen readers
      sneakPeekBtn.setAttribute("aria-expanded", !isExpanded);
    });
  }

});
