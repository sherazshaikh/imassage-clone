import { Avatar } from '@material-ui/core';
import React from 'react';
import "./Message.css"

const Message = ({ id, contents: {
    timestamp, displayName, email, messages, photo, uid
} }) => {
    return (
        <div className='message'>

            <div className="msg">
                <p>{messages}</p>
    <small className='time_stamp'>{timestamp}</small>
            </div>
            <Avatar src={photo}/>
        </div>
    )
}

export default Message
