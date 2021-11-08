import React from 'react';
import {RoundSquareLabel} from "./StyledInput";

const SubmitFile = ({file, onChangeField}) => {
    const onChange = e => {
        e.preventDefault();
        const reader = new FileReader();
        const file = e.target.files[0];
        reader.readAsDataURL(file);

        reader.onloadend = () => {
            onChangeField({key: 'file', value: reader.result});
        }
    }

    return (
        <RoundSquareLabel>
            파일 선택하기
            <input type="file" accept={".jpg, .png, .pdf"} onChange={onChange} />
        </RoundSquareLabel>
    );
};

export default SubmitFile;
