document.addEventListener("DOMContentLoaded", function () {
    if (localStorage.getItem("mapLink")) {
        document.getElementById("map-viewer-iframe").src = localStorage.getItem("mapLink");
    }
});