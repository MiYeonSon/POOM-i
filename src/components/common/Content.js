import React from 'react';
import styled from "styled-components";

const StyledContent = styled.div`
  box-sizing: border-box;
  margin : 2vw 8vw;
  width: 82vw;
  height: fit-content;
  display: flex;
  justify-content: space-between;
`;

const Content = (props) => {
    return (
        <StyledContent>
            {props.children}
        </StyledContent>
    );
};

export default Content;
