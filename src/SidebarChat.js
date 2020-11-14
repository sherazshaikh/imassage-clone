import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setChat } from "./features/chatSlice";
import db from "./features/firebase";
import * as timeago from "timeago.js";
import "./SidebarChat.css";

const SidebarChat = ({ id, chatName }) => {
  const dispatch = useDispatch();
  const [chatInfo, setchatInfo] = useState([]);
  useEffect(() => {
    db.collection("chats")
      .doc(id)
      .collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setchatInfo(snapshot.docs.map((doc) => doc.data()))
      );
  }, [id]);
  return (
    <div
      onClick={() => {
        dispatch(
          setChat({
            chatId: id,
            chatName: chatName,
          })
        );
      }}
      className="sidebar_chat"
    >
      <Avatar src={chatInfo[0]?.photo} className="sidebar_infoAvatar" />
      <div className="sidebarchat_info">
        <h4>{chatName}</h4>
        <p className="last_chat">{chatInfo[0]?.messages}</p>
        <small>
          {timeago.format(new Date(chatInfo[0]?.timestamp?.toDate()))}
        </small>
      </div>
    </div>
  );
};

export default SidebarChat;
