import React from 'react';
import PageButton from "../routing-page/register/PageButton";

const SubmitActionButton = ({onSubmit}) => {
    return (
        <div>
            <PageButton type={"button"} onClick={onSubmit}>다음</PageButton>
        </div>
    );
};

export default SubmitActionButton;
