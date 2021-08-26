import React from "react";
import "./WebBanner.css";
import Banner01 from "./assets/banner01.png";

const WebBanner = () => {
  return (
    <div className={"WebBanner"}>
      <button> &lt; </button>
      <img src={Banner01} alt="banner01" />
      <button> > </button>
    </div>
  );
};

export default WebBanner;
