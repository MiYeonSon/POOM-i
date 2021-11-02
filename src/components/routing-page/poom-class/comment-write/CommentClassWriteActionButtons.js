import React from 'react';
import RectButton from "../../../common/RectButton";

const CommentClassWriteActionButtons = ({onPublish}) => {
    return (
        <div style={{border : '1px solid red'}}>
            <RectButton onClick={onPublish} width={'100%'} backgroundColor={"#AAAAAA"}>입력하기</RectButton>
        </div>
    );
};

export default CommentClassWriteActionButtons;
