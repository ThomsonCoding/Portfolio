import React from 'react';
import ReactDOM from 'react-dom';

import './UrlResult.css';
import CopyMessage from '../CopyMessage/CopyMessage'

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
            <CopyMessage />, 
            document.getElementById('copiedMessage')
          );
          this.forceUpdate()
        const el = this.textArea
        el.select()
        document.execCommand("copy")
        this.setState({copySuccess: true})
      }
    
    
    render() {        
        return (
            <div className="UrlResults">
                <div id="copiedMessage"></div>
                <div className="LongURL">{this.props.longURL}</div>
                <div className="ShortURL"> <textarea ref={(textarea) => this.textArea = textarea} value={this.props.shortURL}></textarea></div>
                <button className="copyButton" onClick={() => this.copyCodeToClipboard()}>COPY</button>
            </div>
        )
    }
}

export default UrlResults;