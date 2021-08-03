// The constructor class allows me to access the containers on the HTML page so I can use them to populate the data once retived.

class UI {
  constructor() {
    this.uiCountryOptions = document.getElementById("countryOptions");
    this.uiCountryInfo = document.getElementById("countryInfo");
  }

  //

  optionsUI(data) {
    this.uiCountryOptions.innerHTML = ` `;
    for (var i = 0; i < data.length; i++) {
      this.uiCountryOptions.innerHTML += `<button class="countryList" id="${data[i].name}" onClick="ui.countryChange(this.id)" value="${i}">${data[i].name}</button>`;
    }
  }

  populateUI(data, i = 0) {
    let countryFlag = data[i].flag;
    let countryName = data[i].name;
    let countryAbv = data[i].cioc;
    let countryPopulation = data[i].population.toLocaleString();
    let countryRegion = data[i].region;
    let countryCapital = data[i].capital;
    let countryBorders = data[i].borders.length;
    this.uiCountryInfo.innerHTML = `
    <h3>${countryName} (${countryAbv})</h3>
    <img src="${countryFlag}" id="flagImage" alt="Flag">
    <p><b>Population:</b> ${countryPopulation}</p>
    <p><b>Region:</b> ${countryRegion}</p>
    <p><b>Capital:</b> ${countryCapital}</p>
    <p><b>Connecting Countries:</b> ${countryBorders}</p>
    `;
    document.body.style.backgroundImage = `url('${countryFlag}')`;
  }

  countryChange(id) {
    const requestedNumber = document.getElementById(id).value;
    return otherOptions(requestedNumber);
  }
}
