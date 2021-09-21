//This is used to fetch the data from the json file. Then return the data that will be used for the quiz. 

class Fetch {
    async getCurrent() { 
  
      const response = await fetch(
        `./JS/Saffron.json`
      );
  
      const data = await response.json();
  
      return data;
    }
};