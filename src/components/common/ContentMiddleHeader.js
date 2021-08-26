import React from 'react';
import styled from 'styled-components';

const StyledMiddleHeader = styled.div`
  box-sizing: border-box;
  width: fit-content;
  height: 5vh;
  display: flex;
  color: #707070;
  flex-wrap: wrap;
  align-items: center;
  font-size: 1.5vw;
  font-weight: 700;
  font-family: 'LotteMartDream';
`;

const ContentMiddleHeader = (props) => {
    return (
        <StyledMiddleHeader>{props.children}</StyledMiddleHeader>
    );
};

export default ContentMiddleHeader;
