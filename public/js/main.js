const modal = document.querySelector(".postModal");
const createPostBtn = document.querySelector(".openModal");
const closeBtn = document.querySelector(".close");
const body = document.querySelector("main");
const nav = document.querySelector("nav");
const imgInput = document.querySelector("#img_upload");
// const likeText = document.querySelectorAll(".like");

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

imgInput.onchange = (event) => {
  const [file] = imgInput.files;
  if (file) {
    img_preview.src = URL.createObjectURL(file);
  }
};
