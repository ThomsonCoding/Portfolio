class Fetch {
  async getCurrent() {
    const myKey = "xHy1hBmuAOImDnjW3AHbmxDAHR8xuiAfXCcBMfgT";

    const response = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${myKey}`
    );

    const data = await response.json();

    return data;
  }
}
