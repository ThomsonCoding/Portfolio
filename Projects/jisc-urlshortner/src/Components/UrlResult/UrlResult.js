import React from 'react';

import './UrlResult.css';

console.log("updated1");

class UrlResults extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            copySuccess: false
        }
    }

    copyCodeToClipboard = () => {
        const el = this.textArea
        el.select()
        document.execCommand("copy")
        this.setState({copySuccess: true})
      }
    
    
    render() {        
        return (
            <div className="UrlResults">
                <div className="LongURL">{this.props.longURL}</div>
                <div className="ShortURL"> <textarea ref={(textarea) => this.textArea = textarea} value={this.props.shortURL}></textarea></div>
                <button className="copyButton" onClick={() => this.copyCodeToClipboard()}>COPY</button>
            </div>
        )
    }
}

export default UrlResults;