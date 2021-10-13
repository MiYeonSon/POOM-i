import React from 'react';
import ProfileImage from "../ProfileImage";
import Person from "../assets/005-gardener.png";
import styled from "styled-components";

const StyledPostWriterInfo = styled.div`
  box-sizing: border-box;
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const WriterInfoTemplate = styled.div`
  box-sizing: border-box;
  width: 9vw;
  height: inherit;
  margin: 0vw 0.7vw;
  display: inline-block;
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


const PostWriterInfo = (props) => {
    const getScore = () => {
        let score = '';
        for (let i = 0; i < props.review; i++) {
            score += '❤';
        }

        return score
    }


    return (
        <StyledPostWriterInfo>
            <ProfileImage size={4} imgSrc={Person}/>
            <WriterInfoTemplate>
                <StyledWriterId>{props.writer}</StyledWriterId>
                <StyledWriterReview>품앗이 점수 : {getScore()}</StyledWriterReview>
            </WriterInfoTemplate>
        </StyledPostWriterInfo>
    );
};

export default PostWriterInfo;
