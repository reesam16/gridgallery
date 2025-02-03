const hamburger = document.querySelector(".hamburger");
const buttons = document.querySelector(".buttons");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  buttons.classList.toggle("active");
});

document.querySelectorAll(".link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    buttons.classList.remove("active");
  })
);

////////////

// images

let images = document.querySelectorAll("img");
let wrapper = document.getElementById("wrapper");
let imgWrapper = document.getElementById("fullImg");
let close = document.getElementById("wrapper");

// images.forEach((img, i) => {
//   img.addEventListener("click", () => {
//     openModel(`img/img${i}.jpg`);
//   });
// });

// close.addEventListener("click", () => (wrapper.style.display = "none"));

// function openModel(pic) {
//   wrapper.style.display = "flex";
//   imgWrapper.src = pic;
// }
// wtf
function openFullImg(pic) {
  wrapper.style.display = "flex";
  imgWrapper.src = pic;
}
function closeFullImg() {
  wrapper.style.display = "none";
}
