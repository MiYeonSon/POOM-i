import React from 'react';
import styled from "styled-components";

const SideTitle = (props) => {
    const StyledSideTitle = styled.div`
      box-sizing: border-box;
      margin: 1vw auto;
      width: 100%;
      text-align: right;
      height: fit-content;
      font-weight: 700;
      font-size: 1.6vw;
      color: #797979;
    `;


    return (
        <StyledSideTitle>{props.children}</StyledSideTitle>
    );
};

export default SideTitle;
