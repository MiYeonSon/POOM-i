import React from "react";
import Banner01 from "./assets/banner01.png";
import styled from "styled-components";

const BannerTemplate = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 20vw;
  
  background: #F6EFE0;
  display: flex;
  justify-content: center;
  align-items: center;
  
  img {
    box-sizing: border-box;
    height: 20vw;
  }
  
  button {
    font-family: 'BMJUA';
    font-size: 7vh;
    color : #FFFFFF;
    border: none;
    background: none;
    cursor: pointer;
  }
`;

const WebBanner = () => {
  return (
    <BannerTemplate>
      <button> &lt; </button>
      <img src={Banner01} alt="banner01" />
      <button> > </button>
    </BannerTemplate>
  );
};

export default WebBanner;
