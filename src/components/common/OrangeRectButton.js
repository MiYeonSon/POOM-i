import React from 'react';
import styled from "styled-components";


const OrangeRectButton = (props) => {
    const StyledOrangeRectButton = styled.button`
      box-sizing: border-box;
      margin: 0 0 0 1vw;
      width: 5vw;
      height: 3.5vh;
      background: #FFB663;
      color: white;
      font-size: 0.8vw;
      font-weight: 300;
      font-family: 'LotteMartDream';
      letter-spacing: 0.1vw;
      border: none;
      cursor: pointer;
    `;

    return (
        <StyledOrangeRectButton>{props.children}</StyledOrangeRectButton>
    );
};

export default OrangeRectButton;
