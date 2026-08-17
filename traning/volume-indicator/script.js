const volumeDown = document.querySelector(".volume-down");
const volumeUp = document.querySelector(".volume-up");
const volumeRects = document.querySelectorAll(".volume-rect");
const indicator = document.querySelector(".indicator");

let volume = 0;

volumeUp.addEventListener("click", () => {
  if (volume < volumeRects.length) {
    volumeRects[volume].classList.add("volume-rect__active");
    volume++;
    indicator.textContent = volume;
  }
});

volumeDown.addEventListener("click", () => {
  if (volume > 0) {
    volume--;
    volumeRects[volume].classList.remove("volume-rect__active");
    indicator.textContent = volume;
  }
});
