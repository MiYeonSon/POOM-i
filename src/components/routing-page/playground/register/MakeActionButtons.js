import React from 'react';
import PageButton from "../../register/PageButton";

const MakeActionButtons = ({onPublish}) => {
    return (
        <div>
            <PageButton type={'button'} onClick={onPublish} highlight>등록</PageButton>
        </div>
    );
};

export default MakeActionButtons;
