class Fetch {
  async getCurrent() { // Connects to the NASA API to pull the picture of the day. 
    const myKey = "xHy1hBmuAOImDnjW3AHbmxDAHR8xuiAfXCcBMfgT";

    const response = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${myKey}`
    );

    const data = await response.json();

    return data;
  }

  async getEpic() { // Connects to the NASA API to pull the EPIC photo.  
    const myKey = "xHy1hBmuAOImDnjW3AHbmxDAHR8xuiAfXCcBMfgT";

    const response = await fetch(
      `https://epic.gsfc.nasa.gov/api/natural?api_key=${myKey}`
    );

    const EpicData = await response.json();

    return EpicData;
  }

  async getEpicImage(EpicData) { // Connects to the NASA API to pull the EPIC photo.  
    const myKey = "xHy1hBmuAOImDnjW3AHbmxDAHR8xuiAfXCcBMfgT";

    let date = EpicData[0].date.split(" ")[0].replace(/-/g, "/"); 
    
    /* 
    The date was formatted wrong, so this is used to replace the format from "DD-MM-YYYY HH:MM:SS" to "DD/MM/YYYY". 
    Example: "2021-08-15 00:59:48" -> "2021/08/15". 
    By using split(" ")[0] It keeps only the date "2021-08-15" removing anything after the space.
    replace(/-/g, "/"); Is used to replace the "-" with "/", allowing the correct format for the date.
    This is done as the next API call to gather the EPIC image requires the correct format. 
    Below we use this date and the image data and reference to the image found in EpicData (E.g. epic_1b_20210815010437) to pull the images URL.
    This is carried out below.  
    */


    const responseImage = await fetch(
      `https://api.nasa.gov/EPIC/archive/natural/${date}/png/${EpicData[0].image}.png?api_key=${myKey}`
    );

    const EpicDataImage = await responseImage.url;

    return EpicDataImage;
  }

  /*
  Using the date and the Rover API, below we pull the data for the rover images.
  The format require isn't the same as the one used for the EPIC Photo. So less is required. 
  We not only pull rover photos, but we pull the information regarding the rover that has taken them. 
  */

  async getMarsRoverImage(EpicData) {
    const myKey = "xHy1hBmuAOImDnjW3AHbmxDAHR8xuiAfXCcBMfgT";

    let date = EpicData[0].date.split(" ")[0];

    const ResponseRoverImages = await fetch(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&api_key=${myKey}`
    );

    const RoverImages = await ResponseRoverImages.json();

    return RoverImages;
  }
}
