"use strict";
window.onload = function () {
  setup();
};


function setup() {
  const image = document.querySelector(".placeholder img");
  const text = document.querySelector(".info-text p");
  let imageIndex = 0;
  let clickCount = 0;
  const texts = [
    "Find your way through history ",
    "Discover our exciting activites",
    "Stay updated on our exhibitions",
  ];
  const images = ["06032016-DSC_5246.jpg", "museum2.jpg", "museum3.jpg"];
  document.getElementById("buttonNext").addEventListener("click", () => {
    clickCount++;
    //images//
    imageIndex = (imageIndex + 1) % images.length;
    image.src = "./images/" + images[imageIndex];

    //circles//
    let round = document.querySelector("#round" + (imageIndex + 1));
    round.style.backgroundColor = "#30616B";
    let prevRound = document.querySelector("#round" + imageIndex);
    if (prevRound) prevRound.style.backgroundColor = "rgba(44,44,44,0.5)";
    //text //
    text.textContent = texts[imageIndex];

    // next page
    if (clickCount % 3 === 0) {
      location.href = "./home.html";
      round.style.backgroundColor = "rgba(44,44,44,0.5)";

    }
  });
}