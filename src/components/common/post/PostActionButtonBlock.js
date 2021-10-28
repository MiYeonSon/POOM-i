import React from 'react';
import styled from "styled-components";

const StyledPostActionButtonBlock = styled.div`
  box-sizing: border-box;
  width: fit-content;
  margin: 0.5vw 0;
`;

const PostActionButtonBlock = ({children}) => {
    return (
        <StyledPostActionButtonBlock>{children}</StyledPostActionButtonBlock>
    );
};

export default PostActionButtonBlock;
