const cookie = document.getElementById('cookie');
const counter = document.getElementById('clicker__counter');

cookie.onclick = function () {
  const clicksCount = Number(counter.textContent) + 1;

  counter.textContent = clicksCount;

  if (clicksCount % 2 === 1) {
    cookie.width = 220;
    cookie.height = 220;
  } else {
    cookie.width = 200;
    cookie.height = 200;
  }
};
