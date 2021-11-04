import React from 'react';
import RectButton from "../../../common/RectButton";

const CommentClassWriteActionButtons = ({onPublish}) => {
    return (
        <div>
            <RectButton onClick={onPublish} width={'100%'} margin={'0'} backgroundColor={"#AAAAAA"}>입력하기</RectButton>
        </div>
    );
};

export default CommentClassWriteActionButtons;
