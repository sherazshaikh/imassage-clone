import { Avatar } from '@material-ui/core';
import React from 'react';
import { useDispatch } from 'react-redux';
import { setChat } from "./features/chatSlice"
import './SidebarChat.css'

const SidebarChat = ({ id, chatName }) => {
    const dispatch = useDispatch()
    return (
        <div onClick={() => {
            dispatch(
                setChat({
                    chatId: id,
                    chatName: chatName
                })
            )
        }
        } className='sidebar_chat'>
            <Avatar className='sidebar_infoAvatar' />
            <div className="sidebarchat_info">
                <h4>{chatName}</h4>
                <p>Last Messages</p>
                <small>TimeStamp</small>
            </div>

        </div>
    )
}

export default SidebarChat
