import React from "react";
import "./Imessage.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import msgImg from "./msg.jpg";
import { useSelector } from "react-redux";
import { selectchatId } from "./features/chatSlice";

const Imessage = () => {

  const userId = useSelector(selectchatId);
  return (
    <div className="imessage">
      <Sidebar />
      {userId ? <Chat /> : <img src={msgImg} />}
    </div>

    
  );
};

export default Imessage;
