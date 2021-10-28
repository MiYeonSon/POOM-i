import React from 'react';
import styled from 'styled-components';

const StyledPostCreateDate = styled.div`
  box-sizing: border-box;
  margin: ${props => props.margin || '1vw 0'};
  color: #AAAAAA;
  font-weight: lighter;
  text-align: right;
  font-size: ${props => props.fontSize || '1vw'};
`;

const PostCreateDate = ({createDate, margin, fontSize}) => {
    return (
        <StyledPostCreateDate margin={margin} fontSize={fontSize}>작성일 : {createDate}</StyledPostCreateDate>
    );
};

export default PostCreateDate;
