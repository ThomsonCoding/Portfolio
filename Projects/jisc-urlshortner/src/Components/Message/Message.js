import React from 'react';

import './Message.css';

class Message extends React.Component {


    render() {
        return (
        <div className="Message">
            <p>{this.props.message}</p>
        </div> 
        )
    }
}

export default Message;