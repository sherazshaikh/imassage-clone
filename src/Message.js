import { Avatar } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import * as timeago from "timeago.js";
import "./Message.css";

const Message = ({
  id,
  contents: { timestamp, displayName, email, messages, photo, uid },
}) => {
  const user = useSelector(selectUser);

  return (
    <div className={`message ${user.user.email === email && "my_message"}`}>
      <div className="msg">
        <p>{messages}</p>
      </div>
      <small className="time_stamp">
        {timeago.format(new Date(timestamp?.toDate()))}
      </small>
      <Avatar className="user_photo" src={photo} />
    </div>
  );
};

export default Message;
