class FetchTomorrow {
  async getTomorrow(lat, lon) {
    const myKey = "c394a103dd1f0d201c32226e45bbcce5";

    const responseTomorrow = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly&appid=${myKey}&units=metric`
    );

    const dataTomorrow = await responseTomorrow.json();

    return dataTomorrow;
  }
}
