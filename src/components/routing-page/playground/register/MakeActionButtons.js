import React from 'react';

const MakeActionButtons = ({onPublish}) => {
    return (
        <div>
            <button type={'button'} onClick={onPublish}>폼 등록</button>
        </div>
    );
};

export default MakeActionButtons;
