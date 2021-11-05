import React from 'react';
import styled from "styled-components";
import {ProfileImage, StyledWriterId, UserInfoBlock} from "./WriterInfo";
import Person from "../assets/005-gardener.png";

export const CommentUnitBackground = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: fit-content;

  margin: 0.5vw auto;
  padding: 0.7vw 0.2vw;
  border: 1px solid #ECECEC;
  border-radius: 0.25vw;
  background-color: #F5F5F5;

`;

export const CommentUnitContentTemplate = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding : 0 1vw;
  display: flex;
  align-items: center;
`;

export const CommentHeaderBlock = styled.div`
  box-sizing: border-box;
  width: fit-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.1vw;
`;

export const CommentContent = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: fit-content;
  padding: 0;
`;


const CommentUnit = ({applier, contents, writer_score, actionButtons}) => {
    return (
        <CommentUnitBackground>
            <CommentUnitContentTemplate>
                <UserInfoBlock>
                    <ProfileImage size={2.5} imgSrc={Person}/>
                    <StyledWriterId>
                        {applier}
                        <div style={{fontSize : '0.7vw'}}>(TEMP: {writer_score})</div>
                    </StyledWriterId>
                </UserInfoBlock>

                <div style={{width: '100%', marginLeft: '1.5vw'}}>
                    {actionButtons}

                    <CommentContent dangerouslySetInnerHTML={{__html: contents}}/>
                </div>
            </CommentUnitContentTemplate>
        </CommentUnitBackground>
    );
};

export default CommentUnit;


