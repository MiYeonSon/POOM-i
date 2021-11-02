import React from "react";
import "./Footer.css";
import Logo from "./assets/mainLogo.png";

const Footer = () => {
  return (
    <div className={"Footer"}>
      <img src={Logo} alt="logo" />
      <div className={"content"}>
        대전광역시 유성구 동서대로 125 <br />
        Contact. 20161715@edu.hanbat.ac.kr <br />
        20181710@edu.hanbat.ac.kr
        <br />
        <br />
        Copyright 2021. Kim Mingi, Son Miyeon all rights reserved.
      </div>
    </div>
  );
};

export default Footer;
