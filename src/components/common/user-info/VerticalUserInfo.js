import React from 'react';
import styled from "styled-components";
import {BsFillPersonFill} from "react-icons/bs";

const UserInfoTemplate = styled.div`
  box-sizing: border-box;
  width: 4vw;
  text-align: center;
`;

const UserNick = styled.div`
  width: ${props => props.width || '100%'};
  height: fit-content;
  margin: 0.5vh 0;
  text-align: ${props => props.textAlign || 'center'};
  font-size: 0.9vw;
  color: #565656;
`;

const ScoreBlock = styled.div`
  width: 100%;
  font-size: 0.7vw;
`;

const VerticalUserInfo = ({nick, score}) => {
    return (
        <UserInfoTemplate>
            <BsFillPersonFill size={'2.5vw'} color={'#8E8E8E'} style={{
                padding : '0.2vw',
                boxSizing : 'border-box',
                border: '1.5px solid #8E8E8E',
                borderRadius: '100%'
            }}/>
            <UserNick>{nick}</UserNick>
            <ScoreBlock>POOM : {score}</ScoreBlock>
        </UserInfoTemplate>
    );
};

export default VerticalUserInfo;
