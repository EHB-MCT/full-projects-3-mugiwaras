"use strict";

window.onload = function () {

    const popup = document.getElementById("popup");
    const choice = document.getElementById("choice");
    const warntext = document.getElementById("warntext");

    const mode = sessionStorage.getItem("mode");

    if (mode == "normal") {
        /* choice.innerHTML = "<i class='fa fa-male'></i>";
         warntext.innerHTML = "enciulertamer";*/
        popup.style.display = "none";
    } else if (mode == "handicap") {
        choice.innerHTML = "<i class='fa fa-wheelchair-alt'></i>";
        warntext.innerHTML = "We advise you to take the elevator.";
        popup.style.display = "flex";
    } else {
        popup.style.display = "none";
    }

    popup.addEventListener("click", function () {
        popup.style.display = "none";
    });
}