"use strict";

window.onload = function () {
    fetchActivitiesData();


    async function fetchActivitiesData() {
        document.querySelector("#slider-container").innerHTML = '<img src="images/Spinner-1s-200px.gif" alt="Loading">';

        await fetch("http://localhost:3000/museumActivities")
            .then(response => response.json())
            .then(data => {

                let activitiesHTML = "";
                // Traitez les données reçues ici
                // Par exemple, bouclez sur chaque objet dans le tableau de données et ajoutez-le à votre HTML
                data.forEach(function (activity) {
                    activitiesHTML += `
              <div class="slider-item">
                <div class="activity" onclick="window.location.href = '${activity.href}';">
                  <img src="${activity.imagesrc}" alt="">
                  <div class="activity-text">
                    <p>${activity.title}</p>
                    <p><i class="fa fa-clock "> </i>${activity.duration}</p>
                    <p> ${activity.day}</p>
                  </div>
                  <div class="More">
                    <i class="fa fa-angle-right"></i>
                  </div>
                </div>
              </div>
            `;
                });
                document.querySelector('#activities').innerHTML = `
            <div class="slider-container">
              ${activitiesHTML}
            </div>
        `;
            })
            .catch(error => {
                console.error("Error fetching activities", error);
            });

        fetchExhibitionData();
    }

    async function fetchExhibitionData() {
        document.querySelector("#exhibitions").innerHTML = '<img src="images/Spinner-1s-200px.gif" alt="Loading">';

        await fetch("http://localhost:3000/museumExhibitions")
            .then(response => response.json())
            .then(data => {

                // Traitez les données reçues ici
                // Par exemple, bouclez sur chaque objet dans le tableau de données et ajoutez-le à votre HTML
                let exhibitionHTML = "";
                data.forEach(function (exhibition) {
                    exhibitionHTML += `
              <div class="exhibition">
                <img src="${exhibition.imagesrc}" alt="">
                <div class="exhi-text">
                  <h4>${exhibition.title}</h4>
                  <p>${exhibition.description}</p>
                  <a href="${exhibition.href}"><button> read more</button></a>
                </div>
              </div>
            `;
                });
                document.querySelector("#exhibitions").innerHTML = exhibitionHTML;
            })
            .catch(error => {
                console.error("Error fetching exhibitions", error);
            });
    }

};