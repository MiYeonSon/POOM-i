import React from 'react';
import styled from "styled-components";
import {BsFillPersonFill} from "react-icons/bs";

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
  margin: 0vw 0.9vw;
  display: inline-block;
`;

const StyledWriterId = styled.div`
  padding: 0.5vw 0;
  font-size: 1.2vw;
  font-weight: 700;
  color: #565656;
`;

const StyledWriterReview = styled.div`
  font-size: 0.8vw;
  color: #565656;
`;


const HorizontalPostWriterInfo = ({user, review}) => {
    const getScore = () => {
        let score = '';
        for (let i = 0; i < review; i++) {
            score += '❤';
        }
        return score;
    }


    return (
        <StyledPostWriterInfo>
            <BsFillPersonFill size={60} color={'#8E8E8E'} style={{
                padding : '0.2vw',
                boxSizing : 'border-box',
                border: '1.5px solid #8E8E8E',
                borderRadius: '100%'
            }}/>
            <WriterInfoTemplate>
                <StyledWriterId>{user}</StyledWriterId>
                <StyledWriterReview>품앗이 점수 : {getScore()}</StyledWriterReview>
            </WriterInfoTemplate>
        </StyledPostWriterInfo>
    );
};

export default HorizontalPostWriterInfo;
