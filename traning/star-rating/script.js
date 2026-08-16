const stars = document.querySelectorAll(".star");

stars.forEach((star, selectedIndex) => {
  star.addEventListener("click", () => {
    stars.forEach((currentStar, index) => {
      currentStar.classList.toggle("star_active", index <= selectedIndex);
    });
  });
});
