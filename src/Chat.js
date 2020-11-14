import React, { useState } from "react";
import Mic from "@material-ui/icons/Mic";
import Message from "./Message";
import "./Chat.css";
import { Avatar, IconButton } from "@material-ui/core";
import { selectchatId, selectchatName } from "./features/chatSlice";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import firebase from "firebase";
import db from "./features/firebase";
import { selectUser } from "./features/userSlice";

const Chat = () => {
  const [input, setInput] = useState("");
  const user = useSelector(selectUser);
  const chatName = useSelector(selectchatName);
  const chatId = useSelector(selectchatId);
  const [messages, setMessage] = useState([]);

  useEffect(() => {
    if (chatId) {
      db.collection("chats")
        .doc(chatId)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
          setMessage(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    }
  }, [chatId]);
  function sendMessage(e) {
    e.preventDefault();

    db.collection("chats").doc(chatId).collection("messages").add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      uid: user.user.uid,
      messages: input,
      email: user.user.email,
      photo: user.user.photo,
    });
    setInput("");
  }

  return (
    <div className="chat">
      <div className="chat_header">
        <div className="chennel_detail">
          <h4>
            To:
            <span className="chennel_name">{chatName}</span>
          </h4>
        </div>
        <small className="detail">Detaile</small>
      </div>
      <div className="chat_messages_section">
        {messages.map(({ id, data }) => (
          <Message key={id} contents={data} />
        ))}
      </div>
      <div className="chat_inputSection">
        <form onSubmit={sendMessage}>
          <input
            value={input}
            type="text"
            onChange={(e) => setInput(e.target.value)}
          />
        </form>
        <IconButton>
          <Mic />
        </IconButton>
      </div>
    </div>
  );
};

export default Chat;
