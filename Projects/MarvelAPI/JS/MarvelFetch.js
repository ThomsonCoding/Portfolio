class Fetch {
  async getCurrent() {
    const myKey = "23790813a0195540aff452302dad7d4d";
    //make request to url

    const response = await fetch(
      `https://gateway.marvel.com:443/v1/public/characters?apikey=${myKey}`
    );

    const data = await response.json();

    return data;
  }
}
