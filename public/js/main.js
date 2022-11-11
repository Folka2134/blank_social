const modal = document.querySelector(".postModal");
const createPostBtn = document.querySelector(".openModal");
const closeBtn = document.querySelector(".close");
const body = document.querySelector("main");
const nav = document.querySelector("nav");

createPostBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target == body || event.target == nav) {
    modal.style.display = "none";
  }
});
