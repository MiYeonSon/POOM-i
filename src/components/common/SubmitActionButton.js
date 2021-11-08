import React from 'react';

const SubmitActionButton = ({onSubmit}) => {
    return (
        <div>
            <button type={"button"} onClick={onSubmit}>제출</button>
        </div>
    );
};

export default SubmitActionButton;
