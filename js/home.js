"use strict";

window.onload = function () {
  fetchActivitiesData();

  //backend requests
  async function fetchActivitiesData() {
    document.querySelector("#slider-container").innerHTML = '<img src="images/Spinner-1s-200px.gif" alt="Loading">';

    await fetch("http://localhost:3000/museumActivities")
      .then(response => response.json())
      .then(data => {

        let activitiesHTML = "";


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

  //animation redirection
  const select = document.querySelector(".selection");
  select.addEventListener("change", function () {
    const selectedOption = select.options[select.selectedIndex].text;
    const exhibitions = document.querySelectorAll(".exhi-text h4");
    for (let exhibition of exhibitions) {
      if (exhibition.textContent === selectedOption) {
        exhibition.scrollIntoView({
          behavior: "smooth"
        });
        exhibition.classList.add("selected");
        setTimeout(() => {
          exhibition.classList.remove("selected");
        }, 2000);
        break;
      }
    }
  });

  //popup
  const popup = document.getElementById("popup");
  const handicapBtn = document.getElementById("handicap-btn");
  const normalBtn = document.getElementById("normal-btn");

  handicapBtn.addEventListener("click", function () {
    sessionStorage.setItem("mode", "handicap");
    popup.style.display = "none";
  });

  normalBtn.addEventListener("click", function () {
    sessionStorage.setItem("mode", "normal");
    popup.style.display = "none";
  });

  if (!sessionStorage.getItem("mode")) {
    popup.style.display = "flex";
  } else {
    popup.style.display = "none";
  }


};