import React from 'react';
import RectButton from "../../../common/RectButton";
import styled from "styled-components";

const WriteActionButtonsBlock = styled.div`
  margin: 1vw 0 0;
  display: flex;
  justify-content: right;
`;

const FindClassWriteActionButtons = ({onPublish, isEdit}) => {
    return (
        <WriteActionButtonsBlock>
            <RectButton type={"button"} onClick={onPublish} backgroundColor={"#FFB663"}>{isEdit ? '수정' : '등록'}</RectButton>
        </WriteActionButtonsBlock>
    );
};

export default FindClassWriteActionButtons;
