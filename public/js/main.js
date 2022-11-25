const modal = document.querySelector(".postModal");
const createPostBtn = document.querySelector(".openModal");
const closeBtn = document.querySelector(".close");
const body = document.querySelector("main");
const nav = document.querySelector("nav");
const imageForm = document.querySelector("#image-form");
// const imgInput = document.querySelector("#img_upload");
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

imageForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e);
});

// imgInput.onchange = (event) => {
//   const [file] = imgInput.files;
//   if (file) {
//     img_preview.src = URL.createObjectURL(file);
//   }
// };

// likeText.forEach((element) => {
//   element.addEventListener("click", addLike);
// });

// async function addLike() {
//   const createdBy = this.parentNode.parentNode.childNodes[3].textContent;
//   const caption = this.parentNode.parentNode.childNodes[5].textContent;
//   const likes = Number(
//     this.parentNode.parentNode.childNodes[7].childNodes[1].textContent
//   );

//   try {
//     const reponse = await fetch("posts/addLike", {
//       method: "put",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         createdBy: createdBy,
//         caption: caption,
//         likes: likes,
//       }),
//     });
//     const data = await reponse.json();
//     console.log(data);
//     location.reload();
//   } catch (error) {
//     console.log(error);
//   }
// }
