class Fetch {
    async getCurrent() { // Connects to the NASA API to pull the picture of the day. 
  
      const response = await fetch(
        `./JS/Saffron.json`
      );
  
      const data = await response.json();
  
      return data;
    }
};