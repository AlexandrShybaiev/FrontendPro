const img = document.getElementById("sliderImage");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

let current = 1;
const max = 9;

function showImage() {
  img.src = `images/${current}.jpg`;
}

nextBtn.addEventListener("click", function () {
  current++;
  if (current > max) current = 1;
  showImage();
});

prevBtn.addEventListener("click", function () {
  current--;
  if (current < 1) current = max;
  showImage();
});

setInterval(function () {
  current++;
  if (current > max) current = 1;
  showImage();
}, 3000);