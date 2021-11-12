import React from 'react';
import RectButton from "../../../common/RectButton";

const PoomClassActionButtons = ({onClick, isEdit}) => {
    return (
        <div style={{width : '100%', textAlign : 'right'}}>
            <RectButton backgroundColor={'#FFB663'} onClick={onClick}>
                품앗이 반 {isEdit ? '수정하기' : '등록하기'}
            </RectButton>
        </div>
    );
};

export default PoomClassActionButtons;
