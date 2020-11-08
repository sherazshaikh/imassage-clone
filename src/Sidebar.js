import {
  Avatar,
  Button,
  CircularProgress,
  IconButton,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import LibraryAddIcon from "@material-ui/icons/LibraryAdd";
import React from "react";
import "./Sidebar.css";
import SidebarChat from "./SidebarChat";
import db, { auth } from "./features/firebase";
import { ExitToAppRounded } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, login, logout } from "./features/userSlice";
import { useState } from "react";
import { useEffect } from "react";

const Sidebar = () => {
  const user = useSelector(selectUser);
  const [chats, setChats] = useState([]);
  useEffect(() => {
    db.collection("chats").onSnapshot((snapshot) => {
      setChats(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  const addChat = () => {
    const chatName = prompt("Please Add Chat Name");
    if (chatName) {
      db.collection("chats").add({
        chatName: chatName,
      });
    }
  };

  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <Avatar src={user.user.photo} className="header_icon" />
        <div className="header_search">
          <IconButton>
            <SearchIcon />
          </IconButton>
          <input type="text" className="search-input" />
        </div>
        <IconButton variant="outlined">
          <LibraryAddIcon onClick={addChat} />
        </IconButton>
      </div>
      <div className="sidebar_chennel">
        {chats.map(({ id, data: { chatName } }) => (
          <SidebarChat key={id} id={id} chatName={chatName} />
        ))}
      </div>
      <Button
        className="logout_icon"
        onClick={() => {
          auth.signOut();
        }}
      >
        <ExitToAppRounded />
      </Button>
    </div>
  );
};

export default Sidebar;
