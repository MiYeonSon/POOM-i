import React from 'react';
import styled from 'styled-components';
import RectButton from "../../common/RectButton";

const WriteActionButtonsBlock = styled.div`
  margin: 1vw;
  display: flex;
  justify-content: right;
`;

const WriteActionButtons = ({onRegister, onModify, isEdit}) => {
    const onClickHandler = (isEdit ? onModify : onRegister);

    return (
        <WriteActionButtonsBlock>
            <RectButton onClick={onClickHandler} backgroundColor={"#FFB663"}>
                {isEdit ? '수정' : '등록'}하기
            </RectButton>
        </WriteActionButtonsBlock>
    );
};


export default WriteActionButtons;
