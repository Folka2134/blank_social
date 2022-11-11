const modal = document.querySelector(".postModal");
const createPostBtn = document.querySelector(".openModal");
const closeBtn = document.querySelector(".close");

createPostBtn.addEventListener("click", () => {
  console.log("clicking");
  modal.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  console.log("clicking");
  modal.style.display = "none";
});

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
