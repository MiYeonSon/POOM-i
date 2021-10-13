import React from 'react';
import styled from 'styled-components';

const StyledPostCreateDate = styled.div`
  box-sizing: border-box;
  margin: 1vw 0;
  color: #AAAAAA;
  font-weight: lighter;
  text-align: right;
`;

const PostCreateDate = ({createDate}) => {
    return (
        <StyledPostCreateDate>작성일 : {createDate}</StyledPostCreateDate>
    );
};

export default PostCreateDate;
