import React from 'react';
import styled from "styled-components";

const StyledSmallHeader = styled.div`
  box-sizing: border-box;
  width: 55vw;
  height: 3vh;
  margin: 1vw 0 0.3vw 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  font-size: 1.1vw;
  font-weight: 400;
`;

const ContentSmallHeader = (props) => {
    return (
        <StyledSmallHeader>{props.children}</StyledSmallHeader>
    );
};

export default ContentSmallHeader;
