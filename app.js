const upBtn = document.querySelector(".upBtn");
const downBtn = document.querySelector(".downBtn");
const slideBar = document.querySelector(".slideBar");
const slideImg = document.querySelector(".slideImg");
const container = document.querySelector(".container");

const slidesImgCount = slideImg.querySelectorAll("div").length;

let activeSlide = 0;

slideImg.style.top = `-${slidesImgCount - 1}00vh`;

upBtn.addEventListener("click", () => {
  changeSlide("up");
});
downBtn.addEventListener("click", () => {
  changeSlide("down");
});

function changeSlide(direction) {
  if (direction === "up") {
    activeSlide++;
    if (activeSlide === slidesImgCount) {
      activeSlide = 0;
    }
  } else if (direction === "down") {
    activeSlide--;
    if (activeSlide < 0) {
      activeSlide = slidesImgCount - 1;
    }
  }

    const height=container.clientHeight;

  slideImg.style.transform = `translateY(${height * activeSlide}px)`;
  slideBar.style.transform = `translateY(-${height * activeSlide}px)`;
}
