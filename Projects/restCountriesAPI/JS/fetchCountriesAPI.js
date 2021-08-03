class Fetch {
  async getCurrent(name) {
    // const myKey = "c394a103dd1f0d201c32226e45bbcce5";

    //make request to url

    const response = await fetch(
      `https://restcountries.eu/rest/v2/name/${name}`
    );

    const data = await response.json();
    return data;
  }
}
