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

/*
Above is the fetch class. This is used to fetch the data whenever the user searches another place (Which will be passed through as input). 
It does this by making a request to the API for certain information using the await fetch function. 
It will save this information as "Data", and then return the data. 
*/
