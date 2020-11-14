import { createStyles } from "@material-ui/core";
import React from "react";
import loader from "./476.gif";
import "./Loading.css";

const Loading = () => {
  return (
    <div className="page_loader">
      <img src={loader} alt="" />
    </div>
  );
};

export default Loading;
