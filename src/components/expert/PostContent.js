import React from 'react';
import styled from "styled-components";

const PostContent = ({children}) => {
    const StyledPostContent = styled.div`
      box-sizing: border-box;
      width: 100%;
      height: fit-content;
      margin: 1vw 0 2vw;
      color: #565656;
      font-weight: 300;
      font-size: 0.9vw;
      white-space: pre-wrap;
      line-height: 1.3vw;
    `;

    return (
        <StyledPostContent>{children}</StyledPostContent>
    );
};

export default PostContent;
