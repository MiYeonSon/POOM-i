import React from 'react';
import styled from 'styled-components';

const StyledPageButtonBlock = styled.div`
  box-sizing: border-box;
  width: 55vw;
  height: fit-content;
  margin: 5vw auto;
  display: flex;
  justify-content: center;
`;


const PageButtonBlock = (props) => {
    return (
        <StyledPageButtonBlock>{props.children}</StyledPageButtonBlock>
    );
};

export default PageButtonBlock;
