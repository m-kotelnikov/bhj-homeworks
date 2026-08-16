const checkbox = document.getElementById("checkbox");
checkbox.addEventListener("change", function () {
  if (this.checked) {
    document.body.classList.add("light-mode");
  } else {
    document.body.classList.remove("light-mode");
  }
});
