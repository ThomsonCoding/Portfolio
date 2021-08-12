class UI {
  constructor() {
    this.uiMovieContainer = document.getElementById("NasaGrid");
  }

  populatePicOfDayUI(data) {
    let imageTitle = data.title;
    let imageOfTheDay = data.hdurl;
    let imageCopyright = data.copyright;
    let imageDate = data.date;
    let imageExplanation = data.explanation;
    this.uiMovieContainer.innerHTML += `
    
    <div>
    <h2>Photo of the day</h3>
    <h3>${imageTitle}</h3>
    <img src=${imageOfTheDay} alt="${imageCopyright} image">
    <p>&copy; ${imageCopyright} - ${imageDate} </p>
    <p>${imageExplanation}</p>
    </div>
    
    `;
  }

  DailyEPICPictureUI(EpicData, EpicDataImage) {
    let EPICImage = EpicDataImage;
    this.uiMovieContainer.innerHTML += `
    
    <div>
    <img src=${EPICImage} alt="image">
    </div>
    
    `;
  }
}
