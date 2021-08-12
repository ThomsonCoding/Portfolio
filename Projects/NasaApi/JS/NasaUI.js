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
    let EPICCaption = EpicData[0].caption;
    let EPICImageDate = EpicData[0].date;
    this.uiMovieContainer.innerHTML += `
    
    <div>
    <h2>EPIC</h3>
    <h3>Earth Polychromatic Imaging Camera</h3>
    <img src=${EPICImage} alt="image">
    <p>${EPICImageDate} </p>
    <p>${EPICCaption}</p>
    </div>
    
    `;
  }
}
