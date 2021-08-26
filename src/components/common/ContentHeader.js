import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
  box-sizing: border-box;
  width: fit-content;
  height: 8vh;
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  font-weight: 700;
  font-size: 1.9vw;
  color: #4E7093;
`;

const ContentHeader = (props) => {
    return <StyledHeader>{props.children}</StyledHeader>;
};

export default ContentHeader;
