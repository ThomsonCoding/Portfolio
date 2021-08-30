import React from 'react'; //Import the React Library and save it as react. 
// import ReactDOM from 'react-dom'; //Import the reactDOM library, allowing you to edit the DOM. 
import './App.css'; //This contains the styling for all the different attributes within the App render method. Classes such as App, AppHeader, IntroText, etc. 

import SearchBox from '../SearchBox/SearchBox'; //This is used to import <SearchBox /> and all of its functionalities. 
// import UrlResults from '../UrlResult/UrlResult'; //This is used to import <UrlResults /> and all of its functionalities. 

class App extends React.Component { 
  //Defining the Class Component, the App class will hold the main structure of the Data, and call upon other classes from different files. (An example would be calling <SearchBox /> from the SearchBox.js file.)
  //Extends React.Component is also added, it is a JS class.

  render() { //render is used to return the JSX expression, this is used in this case to return the App DIV containing the Header, input boxes, button, results, etc. 
    return (
    <div className="App">
      <h1 className="AppHeader">URL Shortener</h1>
      <i><p className="IntroText">Our tool allows you to seamlessly convert your long URL to a short, quick and user friendly one.</p></i>
      <SearchBox />
    </div>
    )
  }
}

//In the above code <SearchBox /> and <UrlResults /> are Component instances, these are used to render the JSX created within their JS files. 

export default App;
// Exporting the class means I can call this within other react js folders. An example would be <SearchBox /> which has been called within this App.js folder.