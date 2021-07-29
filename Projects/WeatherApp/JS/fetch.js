class Fetch {
  async getCurrent(input) {
    const myKey = "c394a103dd1f0d201c32226e45bbcce5";

    //make request to url

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${myKey}&units=metric`
    );

    const data = await response.json();

    return data;
  }
}
