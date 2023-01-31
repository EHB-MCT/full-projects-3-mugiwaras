"use strict"

window.onload = function () {

    //change sessionstorage to load New chosen direction 

    var firstDirection = document.getElementById("firstDirection");
    var secondDirection = document.getElementById("secondDirection");
    var thirdDirection = document.getElementById("thirdDirection");
    var fourthDirection = document.getElementById("fourthDirection");
    var fifthDirection = document.getElementById("fifthDirection");
    var sixthDirection = document.getElementById("sixthDirection");
    var seventhDirection = document.getElementById("seventhDirection");

    if (firstDirection) {
        firstDirection.addEventListener("click", function () {
            localStorage.setItem("mapLink", "https://map-viewer.situm.com/?email=kliche777%40plexvenet.com&apikey=73d4ef46fbae30adaccad03f5f6e9fbdf79669661f4fda38b8cb5b3db59c2ae9&lng=fr&buildingid=12558&floorid=39212&poiid=136706");
            window.location.href = "../mapWithDirection.html";
        });
    } else if (secondDirection) {
        secondDirection.addEventListener("click", function () {
            localStorage.setItem("mapLink", "https://map-viewer.situm.com/?email=kliche777%40plexvenet.com&apikey=73d4ef46fbae30adaccad03f5f6e9fbdf79669661f4fda38b8cb5b3db59c2ae9&lng=fr&buildingid=12558&floorid=39216&poiid=137317");
            window.location.href = "../mapWithDirection.html";
        });
    } else if (thirdDirection) {
        thirdDirection.addEventListener("click", function () {
            localStorage.setItem("mapLink", "https://map-viewer.situm.com/?email=kliche777%40plexvenet.com&apikey=73d4ef46fbae30adaccad03f5f6e9fbdf79669661f4fda38b8cb5b3db59c2ae9&lng=fr&buildingid=12558&floorid=39212&poiid=137318");
            window.location.href = "../mapWithDirection.html";
        });
    } else if (fourthDirection) {
        fourthDirection.addEventListener("click", function () {
            localStorage.setItem("mapLink", "https://map-viewer.situm.com/?email=kliche777%40plexvenet.com&apikey=73d4ef46fbae30adaccad03f5f6e9fbdf79669661f4fda38b8cb5b3db59c2ae9&lng=fr&buildingid=12558&floorid=39212&poiid=137319");
            window.location.href = "../mapWithDirection.html";
        });
    } else if (fifthDirection) {
        fifthDirection.addEventListener("click", function () {
            localStorage.setItem("mapLink", "https://map-viewer.situm.com/?email=kliche777%40plexvenet.com&apikey=73d4ef46fbae30adaccad03f5f6e9fbdf79669661f4fda38b8cb5b3db59c2ae9&lng=fr&buildingid=12558&floorid=39213&poiid=137320");
            window.location.href = "../mapWithDirection.html";
        });
    } else if (sixthDirection) {
        sixthDirection.addEventListener("click", function () {
            localStorage.setItem("mapLink", "https://map-viewer.situm.com/?email=kliche777%40plexvenet.com&apikey=73d4ef46fbae30adaccad03f5f6e9fbdf79669661f4fda38b8cb5b3db59c2ae9&lng=fr&buildingid=12558&floorid=39213&poiid=137321");
            window.location.href = "../mapWithDirection.html";
        });
    } else if (seventhDirection) {
        seventhDirection.addEventListener("click", function () {
            localStorage.setItem("mapLink", "https://map-viewer.situm.com/?email=kliche777%40plexvenet.com&apikey=73d4ef46fbae30adaccad03f5f6e9fbdf79669661f4fda38b8cb5b3db59c2ae9&lng=fr&buildingid=12558&floorid=39213&poiid=137322");
            window.location.href = "../mapWithDirection.html";
        });
    }

    var mapViewerIframe = document.getElementById("map-viewer-iframe");
    if (mapViewerIframe) {
        if (localStorage.getItem("mapLink")) {}
    }

}