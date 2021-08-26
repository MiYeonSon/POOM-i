import React from 'react';
import styled from "styled-components";

const PostListZone = ({children}) => {
    const StyledPostListZone = styled.div`
      box-sizing: border-box;
      width: 100%;
      height: fit-content;
      margin: 3vw 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
    `;

    return (
        <StyledPostListZone>{children}</StyledPostListZone>
    );
};

export default PostListZone;
