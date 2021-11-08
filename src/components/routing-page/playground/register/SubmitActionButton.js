import React from 'react';

const SubmitActionButton = ({onSubmit}) => {
    return (
        <div>
            <button type={'button'} onClick={onSubmit}>다음</button>
        </div>
    );
};

export default SubmitActionButton;
