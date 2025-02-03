// navbar

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

////new images

let images = document.querySelectorAll("img");
let wrapper = document.getElementById("wrapper");
let imgWrapper = document.getElementById("fullImg");
let close = document.getElementById("wrapper");

images.forEach((img, i) => {
  img.addEventListener("click", () => {
    openModel(`img/img${i}.jpg`);
  });
});

close.addEventListener("click", () => (wrapper.style.display = "none"));

function openModel(pic) {
  wrapper.style.display = "flex";
  imgWrapper.src = pic;
}
