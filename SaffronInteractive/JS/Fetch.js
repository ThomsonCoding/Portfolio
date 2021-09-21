class Fetch {
    async getCurrent() { 
  
      const response = await fetch(
        `./JS/Saffron.json`
      );
  
      const data = await response.json();
  
      return data;
    }
};