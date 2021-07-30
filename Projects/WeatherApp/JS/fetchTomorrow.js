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

/*
Above is the fetchTomorrow class. This is slightly different to the fetch class.
What it does is take the latitude and longitude of the data from the searched location (This data will be fed through from the data retrived from the fetch API). 
And runs it through a different API, returning the data for the next couple of days. 
*/
