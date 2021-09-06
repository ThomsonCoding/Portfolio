import React from 'react';
import ReactDOM from 'react-dom';

import './UrlResult.css';
import Message from '../Message/Message'

console.log("updated1");

class UrlResults extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            copySuccess: false
        }
    }

    copyCodeToClipboard = () => {
        ReactDOM.render(
            <Message message="COPIED" />, 
            document.getElementById('Message')
          );
          this.forceUpdate()
        const el = this.textArea
        el.select()
        document.execCommand("copy")
        this.setState({copySuccess: true})
      }
    
    emailLink = () => {
        ReactDOM.render(
            <Message message="EMAILED"/>, 
            document.getElementById('Message')
          );
      }
    
    
    render() {        
        return (
            <div className="UrlResults">
                <div id="copiedMessage"></div>
                <div className="LongURL">{this.props.longURL}</div>
                <div className="ShortURL"> <textarea ref={(textarea) => this.textArea = textarea} value={this.props.shortURL}></textarea></div>
                <button className="copyButton" onClick={() => this.copyCodeToClipboard()}>COPY</button>
                <button className="emailButton" onClick={() => this.emailLink()}>EMAIL</button>
            </div>
        )
    }
}

export default UrlResults;