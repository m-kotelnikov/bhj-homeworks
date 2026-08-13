const timerElement = document.querySelector("#timer");

let seconds = Number(timerElement.textContent);

const countdown = setInterval(() => {
  seconds--;
  timerElement.textContent = seconds;

  if (seconds === 0) {
    clearInterval(countdown);
    alert("Вы победили в конкурсе!");
  }
}, 1000);
