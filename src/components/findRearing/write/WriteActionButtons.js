import React from 'react';
import styled from 'styled-components';
import OrangeRectButton from "../../common/OrangeRectButton";

const WriteActionButtonsBlock = styled.div`
  margin: 1vw;
  display: flex;
  justify-content: right;
`;

const StyledButton = styled.button`
  box-sizing: border-box;
  width: 5vw;
  height: 3.5vh;
  background: #FFB663;
  color: white;
  font-size: 0.8vw;
  font-weight: 300;
  font-family: 'LotteMartDream';
  letter-spacing: 0.1vw;
  border: none;
  cursor: pointer;
`;


const WriteActionButtons = ({onPublish, onCancel}) => {
    return (
        <WriteActionButtonsBlock>
            <StyledButton onClick={onPublish}>
                작성하기
            </StyledButton>
        </WriteActionButtonsBlock>
    );
};


export default WriteActionButtons;
