import React from 'react';
import RectButton from "../../../common/RectButton";
import {WriteActionButtonsBlock} from "../../../common/post/StyledEditor";



const ChildcareWriteActionButtons = ({onRegister, onModify, isEdit}) => {
    const onClickHandler = (isEdit ? onModify : onRegister);

    return (
        <WriteActionButtonsBlock>
            <RectButton onClick={onClickHandler} backgroundColor={"#FFB663"}>
                {isEdit ? '수정' : '등록'}하기
            </RectButton>
        </WriteActionButtonsBlock>
    );
};


export default ChildcareWriteActionButtons;
