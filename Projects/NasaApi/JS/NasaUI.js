class UI {
  constructor() {
    this.uiNasaContainer = document.getElementById("NasaGrid");
    this.uiRoverContainer = document.getElementById("RoverGrid");
  }

  populatePicOfDayUI(data) {
    let imageTitle = data.title;
    let imageOfTheDay = data.hdurl;
    let imageCopyright = data.copyright;
    let imageDate = data.date;
    let imageExplanation = data.explanation;
    this.uiNasaContainer.innerHTML += `
    
    <div>
    <h2>POTD</h3>
    <h3>Photo of the day: ${imageTitle}</h3>
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
    this.uiNasaContainer.innerHTML += `
    
    <div>
    <h2>EPIC</h3>
    <h3>Earth Polychromatic Imaging Camera</h3>
    <img src=${EPICImage} alt="image">
    <p>${EPICImageDate} </p>
    <p>${EPICCaption}</p>
    <p>The EPIC API provides information on the imagery collected by DSCOVR's Earth Polychromatic Imaging Camera (EPIC) instrument. Uniquely positioned at the Earth-Sun Lagrange point, EPIC provides full disc imagery of the Earth and captures unique perspectives of certain astronomical events such as lunar transits using a 2048x2048 pixel CCD (Charge Coupled Device) detector coupled to a 30-cm aperture Cassegrain telescope.</p>
    </div>
    
   
    `;
  }

  populateRoverImages(RoverImages) {
    console.log(RoverImages);
    for (var i = 0; i < 8; i += 1) {
      let RoverImage1 = RoverImages.photos[i].img_src;
      let EarthDate = RoverImages.photos[i].earth_date;
      let RoverID = RoverImages.photos[i].rover.id;
      let RoverName = RoverImages.photos[i].rover.name;
      let LandingDate = RoverImages.photos[i].rover.landing_date;
      let LaunchDate = RoverImages.photos[i].rover.launch_date;

      this.uiRoverContainer.innerHTML += `
    <div>
    <h2>Mars Rover</h3>
    <h3>${RoverName} Rover Photo - ${i + 1}</h3>
    <img src=${RoverImage1} alt="image">
    <h4>Mars Rover Details</h4>
    <p><b>Name:</b> ${RoverName}</P>
    <p><b>ID:</b> ${RoverID} </p>
    <p><b>Landing date:</b> ${LandingDate}</p>
    <p><b>Launch date:</b> ${LaunchDate}</p>
    <p><b>Earths date:</b> ${EarthDate} </p>
    </div>
    `;
    }
  }
}
