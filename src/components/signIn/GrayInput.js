import React from 'react';
import styled from "styled-components";

const StyledGrayInput = styled.input`
  box-sizing: border-box;
  display: inline-block;
  width: 23vw;
  height: 5vh;
  margin: 0.3vw 0;
  border: none;
  border-radius: 0.5rem;

  background: #EEEEEE;

  &::placeholder {
    padding: 0.5vw;
    font-family: 'LotteMartDream';
    font-size: 1vw;
    color: #AAAAAA;
  }
`;


const GrayInput = (props) => {
    return (
        <StyledGrayInput {...props}/>
    );
};

export default GrayInput;
