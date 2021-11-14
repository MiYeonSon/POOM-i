import React from 'react';
import RectButton from "../../../common/RectButton";
import {WriteActionButtonsBlock} from "../../../common/post/StyledEditor";

const ApplyChildcareWriteActionButtons = ({onPublish, isEdit}) => {
    return (
        <WriteActionButtonsBlock>
            <RectButton onClick={onPublish} backgroundColor={"#FFB663"}>
                {isEdit ? '수정하기' : '지원하기' } </RectButton>
        </WriteActionButtonsBlock>
    );
};

export default ApplyChildcareWriteActionButtons;
