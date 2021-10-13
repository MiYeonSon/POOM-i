import React from 'react';
import styled from "styled-components";


const RectButton = ({onClick, backgroundColor, children}) => {
    const StyledOrangeRectButton = styled.button`
      box-sizing: border-box;
      margin: 0 0 0 1vw;
      width: 5vw;
      height: 3.5vh;
      background: ${backgroundColor};
      color: white;
      font-size: 0.8vw;
      font-weight: 300;
      font-family: 'LotteMartDream';
      letter-spacing: 0.1vw;
      border: none;
      cursor: pointer;
    `;

    return (
        <StyledOrangeRectButton onClick={onClick}>{children}</StyledOrangeRectButton>
    );
};

export default RectButton;
