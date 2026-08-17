const dead = document.getElementById('dead');
const lost = document.getElementById('lost');

const getHole = index => document.getElementById(`hole${index}`);

const resetGame = () => {
  dead.textContent = 0;
  lost.textContent = 0;
};

for (let index = 1; index <= 9; index++) {
  const hole = getHole(index);

  hole.onclick = () => {
    if (hole.classList.contains('hole_has-mole')) {
      dead.textContent = Number(dead.textContent) + 1;

      if (Number(dead.textContent) === 10) {
        alert('Победа!');
        resetGame();
      }
    } else {
      lost.textContent = Number(lost.textContent) + 1;

      if (Number(lost.textContent) === 5) {
        alert('Вы проиграли!');
        resetGame();
      }
    }
  };
}
