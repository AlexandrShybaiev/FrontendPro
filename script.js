const text = document.getElementById("text");
const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  text.classList.toggle("red");
});