import React from 'react';
import ReactDOM from 'react-dom';

import './SearchBox.css';

import UrlResults from '../UrlResult/UrlResult';

import shrtcode from '../../api/shrtcode';

import LoadingMessage from '../LoadingMessage/LoadingMessage';
class SearchBox extends React.Component {
    
    
    constructor(props){
        super(props);
        
        this.state = {
          longUrl : '',
          shortUrl: ''
        }
        
        this.updateInput = this.updateInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        }

        
        
        updateInput(event){
        this.setState({longUrl : event.target.value}) // This sets the longUrl state to the inputted value. 
      }
        
        
        handleSubmit(){
        console.log(this.state.longUrl); //To confirm connection, I log longUrl after the button is clicked. 
        ReactDOM.render(<LoadingMessage message="loading..." />, document.getElementById('resultsDiv'));
        const getLink = async () => {
            await shrtcode
              .get(`shorten?url=${this.state.longUrl}`)
              .then((response) => {
                this.setState({shortUrl: response.data.result.short_link2});
                ReactDOM.render(<UrlResults longURL={this.state.longUrl} shortURL={this.state.shortUrl}/>, document.getElementById('resultsDiv'));
                console.log(this.state.shortUrl);
              })
              .catch((error) => {
                ReactDOM.render(<LoadingMessage message="Please enter valid URL..." />, document.getElementById('resultsDiv'));
              });
          };
          return getLink();
        }


    render() {
        return (
           <div>
            <div className="SearchBox">
                <input placeholder="Enter your URL..." type="url" onChange={this.updateInput}/>
                <button className="SearchButton" onClick={this.handleSubmit}>SEARCH</button>
            </div>
            <div id="resultsDiv"></div>  
        </div> 
        )
    }
}

/* 
In the above render with have a ternary object, this will either return nothing, or update the props named longURL with the input data from the user.
This will be added as part of the URL results, which will display the old URL, the new URL and a copy button to allow the user to copy it. 
This is called within the UrlResults folder within this line: <div className="LongURL">{this.props.longURL}</div>
*/
export default SearchBox;