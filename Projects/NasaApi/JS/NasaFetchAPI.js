class Fetch {
  async getCurrent() {
    const myKey = "xHy1hBmuAOImDnjW3AHbmxDAHR8xuiAfXCcBMfgT";

    const response = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${myKey}`
    );

    const data = await response.json();

    return data;
  }

  async getEpic() {
    const myKey = "xHy1hBmuAOImDnjW3AHbmxDAHR8xuiAfXCcBMfgT";

    const response = await fetch(
      `https://epic.gsfc.nasa.gov/api/natural?api_key=${myKey}`
    );

    const EpicData = await response.json();

    return EpicData;
  }

  async getEpicImage(EpicData) {
    const myKey = "xHy1hBmuAOImDnjW3AHbmxDAHR8xuiAfXCcBMfgT";

    let date = EpicData[0].date.split(" ")[0].replace(/-/g, "/");

    const responseImage = await fetch(
      `https://api.nasa.gov/EPIC/archive/natural/${date}/png/${EpicData[0].image}.png?api_key=${myKey}`
    );

    const EpicDataImage = await responseImage.url;

    return EpicDataImage;
  }
}
