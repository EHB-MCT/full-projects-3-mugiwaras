"use strict";

window.onload = function () {
    fetchExhibitionData();

    function fetchExhibitionData() {
        fetch("http://localhost:3000/museumExhibitions")
            .then(response => response.json())
            .then(data => {

                // Traitez les données reçues ici
                // Par exemple, bouclez sur chaque objet dans le tableau de données et ajoutez-le à votre HTML
                data.forEach(function (exhibition) {
                    let exhibitionHTML = `
              <div class="exhibition">
                <img src="${exhibition.imagesrc}" alt="">
                <div class="exhi-text">
                  <h4>${exhibition.title}</h4>
                  <p>${exhibition.description}</p>
                  <a href="${exhibition.href}"><button> read more</button></a>
                </div>
              </div>
            `;
                    document.querySelector("#exhibitions").innerHTML += exhibitionHTML;
                });
            })
            .catch(error => {
                console.error("Error fetching exhibitions", error);
            });
    }
};