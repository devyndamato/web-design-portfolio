const sneakPeekBtn = document.querySelector("#sneak-peek-btn");
const previewSection = document.querySelector("#experience-preview");

sneakPeekBtn.addEventListener("click", function () {
  previewSection.classList.toggle("hidden");
});
