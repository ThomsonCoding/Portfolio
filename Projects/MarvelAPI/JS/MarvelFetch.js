class Fetch {
  async getCurrent() {
    const myKey = "";
    //make request to url

    const response = await fetch(
      `https://gateway.marvel.com:443/v1/public/characters?apikey=${myKey}hash=${hash}`
    );

    const data = await response.json();

    return data;
  }
}
