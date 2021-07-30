class UI {
  constructor() {
    this.uiContainerLocation = document.getElementById("LocationBox");
    this.uiContainerToday = document.getElementById("TodayBox");
    this.uiContainerTomorrow = document.getElementById("TomorrowBox");
    this.uiContainerDayAfterTomorrow = document.getElementById(
      "DayAfterTomorrowBox"
    );
    this.city;
    this.defaultCity = "London";
  }

  populateUI(data, dataTomorrow) {
    //de-structure vars
    //add them to inner HTML
    //console.log(data);
    console.log(dataTomorrow);
    //dataTomorrow.daily[0].temp.day
    let TodaysIcon = getIcon(data.weather[0].main);
    let TomorrowIcon = getIcon(dataTomorrow.daily[1].weather[0].main);
    let DayAfterTomorrowIcon = getIcon(dataTomorrow.daily[2].weather[0].main);
    let lat = data.coord.lat;
    let lon = data.coord.lon;

    this.uiContainerLocation.innerHTML = `<h2>${data.name}</h2>
    <p>${lat}° N, ${lon}° W</p>`;
    this.uiContainerToday.innerHTML = `
    <h3>Today</h3> 
    <span class="Icon ${TodaysIcon}"></span>
    <h4>${
      data.weather[0].description.charAt(0).toUpperCase() +
      data.weather[0].description.slice(1)
    }.</h4>
    <h4>${data.main.temp} °C</h4>
   `;

    this.uiContainerTomorrow.innerHTML = `
    <h3>Tomorrow</h3> 
    <span class="Icon ${TomorrowIcon}"></span>
    <h4>${
      dataTomorrow.daily[1].weather[0].description.charAt(0).toUpperCase() +
      dataTomorrow.daily[1].weather[0].description.slice(1)
    }.</h4>
    <h4>${dataTomorrow.daily[0].temp.day} °C</h4>
   `;

    this.uiContainerDayAfterTomorrow.innerHTML = `
    <h3 id="DayAfterTomorrow"></h3>
    <span class="Icon ${DayAfterTomorrowIcon}"></span>
    <h4>${
      dataTomorrow.daily[2].weather[0].description.charAt(0).toUpperCase() +
      dataTomorrow.daily[2].weather[0].description.slice(1)
    }.</h4>
    <h4>${dataTomorrow.daily[1].temp.day} °C</h4>
   `;

    getDay();
  }

  clearUI() {
    uiContainer.innerHTML = "";
  }

  saveToLS(data) {
    localStorage.setItem("city", JSON.stringify(data));
  }

  getFromLS() {
    if (localStorage.getItem("city" == null)) {
      return this.defaultCity;
    } else {
      this.city = JSON.parse(localStorage.getItem("city"));
    }

    return this.city;
  }

  clearLS() {
    localStorage.clear();
  }
}

// Below is a switch to decide what Icon should appear.

function getIcon(MainDecider) {
  switch (true) {
    case MainDecider == "Rain":
      return "fas fa-cloud-showers-heavy";
    case MainDecider == "Clouds":
      return "fa fa-cloud";
    case MainDecider == "Clear":
      return "fas fa-sun";
    case MainDecider == "Thunderstorm":
      return "fa fa-bolt";
    case MainDecider == "Drizzle":
      return "fas fa-cloud-rain";
    case MainDecider == "Snow":
      return "fas fa-snowflake";
  }
}
