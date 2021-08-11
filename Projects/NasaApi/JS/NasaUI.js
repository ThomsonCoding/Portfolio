class UI {
  constructor() {
    this.uiMovieContainer = document.getElementById("NasaGrid");
  }

  populatePicOfDayUI(data) {
    console.log(data);
    let imageTitle = data.title;
    let imageOfTheDay = data.hdurl;
    let imageCopyright = data.copyright;
    let imageDate = data.date;
    let imageExplanation = data.explanation;
    console.log(imageOfTheDay);
    this.uiMovieContainer.innerHTML += `
    <div>
    <h4>${imageTitle}</h4>
    <img src=${imageOfTheDay} alt="${imageCopyright} image">
    <p>&copy; ${imageCopyright} - ${imageDate} </p>
    <p>${imageExplanation}</p>
    </div>
    `;
  }
}
