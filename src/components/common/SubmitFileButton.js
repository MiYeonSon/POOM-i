import React from 'react';
import {RoundSquareLabel} from "./StyledInput";

const SubmitFile = () => {
    return (
        <RoundSquareLabel>
            파일 선택하기
            <input type="file" accept={".jpg, .png, .pdf"} />
        </RoundSquareLabel>
    );
};

export default SubmitFile;
