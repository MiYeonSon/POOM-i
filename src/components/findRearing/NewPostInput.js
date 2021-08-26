import React from 'react';
import styled from "styled-components";

const NewPostInput = ({children}) => {
    const StyledNewPostInput = styled.div`
      box-sizing: border-box;
      padding: 0 1.5vw;
      width: 80%;
      height: 3vw;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-family: 'LotteMartDream';
      font-size: 0.8vw;
      color: #AAAAAA;
      background: #F3F3F3;
      border: none;
      outline: #DEDEDE;
      border-radius: 5px;
      text-align: left;
      cursor: pointer;
      overflow: hidden;
    `;
    return (
        <StyledNewPostInput>{children}</StyledNewPostInput>
    );
};

export default NewPostInput;
