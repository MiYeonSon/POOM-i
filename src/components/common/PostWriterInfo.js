import React from 'react';
import ProfileImage from "./ProfileImage";
import Person from "./assets/005-gardener.png";
import styled from "styled-components";

const PostWriterInfo = (props) => {
    const StyledPostWriterInfo = styled.div`
      box-sizing: border-box;
      width: fit-content;
      height: fit-content;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      border: 1px solid green;
    `;

    const WriterInfoTemplate = styled.div`
      box-sizing: border-box;
      width: 9vw;
      height: inherit;
      margin: 0vw 0.5vw;
      display: inline-block;
    
      border: 1px solid black;
    `;

    const StyledWriterId = styled.div`
      padding: 0.5vw 0;
      font-size: 1vw;
      color: #565656;
    `;

    const StyledWriterReview = styled.div`
      font-size: 0.8vw;
      color: #565656;
    `;

    return (
        <StyledPostWriterInfo>
            <ProfileImage size={4} imgSrc={Person}></ProfileImage>
            <WriterInfoTemplate>
                <StyledWriterId>{props.writer}</StyledWriterId>
                <StyledWriterReview>품앗이 점수 : ❤❤❤❤</StyledWriterReview>
            </WriterInfoTemplate>
        </StyledPostWriterInfo>
    );
};

export default PostWriterInfo;
