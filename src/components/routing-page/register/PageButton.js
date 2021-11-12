import React from 'react';
import styled, {css} from "styled-components";

const StyledPageButton = styled.div`
  box-sizing: border-box;
  width: 12vw;
  height: 8vh;
  margin: 1vw 2vw;
  background: #DEDEDE;
  color: #707070;
  font-size: 1.1vw;
  font-weight: 700;
  letter-spacing: 0.5vw;
  border-radius: 100vw;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  
  ${props =>
          props.highlight &&
          css`
            background: #FFB663;
            color: white;
          `};
`;

const PageButton = (props) => {
    return <StyledPageButton {...props}>{props.children}</StyledPageButton>
};

export default PageButton;
