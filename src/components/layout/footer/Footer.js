import React from "react";
import styled from 'styled-components';
import Logo from "./assets/mainLogo.png";

const FooterTemplate = styled.div`
  box-sizing: border-box;
  width: 100vw;
  height: 50vh;
  margin: 7vw 0 0 0;
  padding: 5vw 15vw;

  background: #747474;
  
  img{
    box-sizing: border-box;
    width: 15vw;
    height: 7vh;
  }
  
  div {
    box-sizing: border-box;
    width: 40vw;
    height: 20vh;
    text-align: right;

    float: right;
    font-weight: lighter;
    font-size: 1vw;
    line-height: 1.4vw;
    letter-spacing: 0.05vw;
    color: white;
  }
`;

const Footer = () => {
  return (
    <FooterTemplate>
      <img src={Logo} alt="logo" />
      <div className={"content"}>
        대전광역시 유성구 동서대로 125 <br />
        Contact. 20161715@edu.hanbat.ac.kr <br />
        20181710@edu.hanbat.ac.kr
        <br />
        <br />
        Copyright 2021. Kim Mingi, Son Miyeon all rights reserved.
      </div>
    </FooterTemplate>
  );
};

export default Footer;
