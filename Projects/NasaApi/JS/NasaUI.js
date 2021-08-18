/*
Class UI has been created to be called upon to update the UI with the information gathered from the NASA API.
*/
class UI {
  constructor() {
    this.uiNasaContainer = document.getElementById("NasaGrid"); // Gets reference to the NASAGrid which will be used to update info with the POTD and EPIC Picture.
    this.uiRoverContainer = document.getElementById("RoverGrid"); // Gets reference to the rover grid which will hold the images gathered from the rover images API.
  }

  // Below gathers the image title, date, creator, explanation, etc. And then formats it within a DIV which can be found in the NASAGrid. 
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

  // Below gathers the EPIC image, as well as the caption and the date and then formats it within a DIV which can be found in the NASAGrid. 
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

  // This loops through the Rover API taking 8 images, as well as the information of the ROVER that had taken them. It will then create 8 divs with that information within. The information will be added to the div with the RoverGrid ID.
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
