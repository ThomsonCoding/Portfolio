// Below is a class for the UI, Helping me to manipulate the HTML/CSS. It will allow me to select where I want to add certain data within the populateUI function.

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
    /* 
The below 3 variables run the data from the Weather API, and will return the key word on what the weather forcasted is. 
It will run this key word through the getIcon function, which has a switch within it. Returning the "Icon" necessary for that weather. 
*/
    let TodaysIcon = getIcon(data.weather[0].main);
    let TomorrowIcon = getIcon(dataTomorrow.daily[1].weather[0].main);
    let DayAfterTomorrowIcon = getIcon(dataTomorrow.daily[2].weather[0].main);

    // Below are the lat and lon data for the location searched. This will be used to add that data within the location box.
    let lat = data.coord.lat;
    let lon = data.coord.lon;

    // The will update the HTML to add the name of the location and the lat and lon information behlow it.
    this.uiContainerLocation.innerHTML = `<h2>${data.name}</h2>
    <p>${lat}° N, ${lon}° W</p>`;

    //This section will fill in the data for Today, listing the ICON from the switch, and the Focast and temp from the fetch API.
    this.uiContainerToday.innerHTML = `
    <h3>Today</h3> 
    <span class="Icon ${TodaysIcon}"></span>
    <h4>${
      data.weather[0].description.charAt(0).toUpperCase() +
      data.weather[0].description.slice(1)
    }.</h4>
    <h4>${data.main.temp} °C</h4>
   `;

    //This section will fill in the data for Tomorrow, listing the ICON from the switch, and the Focast and temp from the fetch tomorrow API.
    this.uiContainerTomorrow.innerHTML = `
    <h3>Tomorrow</h3> 
    <span class="Icon ${TomorrowIcon}"></span>
    <h4>${
      dataTomorrow.daily[1].weather[0].description.charAt(0).toUpperCase() +
      dataTomorrow.daily[1].weather[0].description.slice(1)
    }.</h4>
    <h4>${dataTomorrow.daily[0].temp.day} °C</h4>
   `;

    //This section will fill in the data for day after tomorrow, listing the ICON from the switch, and the Focast and temp from the fetch tomorrow API.
    this.uiContainerDayAfterTomorrow.innerHTML = `
    <h3 id="DayAfterTomorrow"></h3>
    <span class="Icon ${DayAfterTomorrowIcon}"></span>
    <h4>${
      dataTomorrow.daily[2].weather[0].description.charAt(0).toUpperCase() +
      dataTomorrow.daily[2].weather[0].description.slice(1)
    }.</h4>
    <h4>${dataTomorrow.daily[1].temp.day} °C</h4>
   `;

    getDay(); // Call this function again to update the day after adding all the new information.
  }

  clearUI() {
    uiContainer.innerHTML = "";
  }

  saveToLS(data) {
    //Saves the city to local storage.
    localStorage.setItem("city", JSON.stringify(data));
  }

  getFromLS() {
    //Retrieves information from local storage.
    if (localStorage.getItem("city" == null)) {
      return this.defaultCity;
    } else {
      this.city = JSON.parse(localStorage.getItem("city"));
    }
    return this.city;
  }

  clearLS() {
    //Clears any local storage information.
    localStorage.clear();
  }
}

// Below is a switch to decide what Icon should appear. It will do this by comparing the Main informaton from the API's, to the keyword. It will then return a class containing an icon.
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
