import React from 'react';
import RectButton from "../../../common/RectButton";
import {WriteActionButtonsBlock} from "../../../common/post/StyledEditor";

const SupportChildcareWriteActionButtons = ({onPublish}) => {
    return (
        <WriteActionButtonsBlock>
            <RectButton onClick={onPublish} backgroundColor={"#FFB663"}>지원하기</RectButton>
        </WriteActionButtonsBlock>
    );
};

export default SupportChildcareWriteActionButtons;
