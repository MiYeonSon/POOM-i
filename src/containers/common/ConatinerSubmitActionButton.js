import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import SubmitActionButton from "../../components/common/SubmitActionButton";
import {submitFileAction} from "../../modules/submitFile";

const ContainerSubmitActionButton = ({check, move}) => {
    const dispatch = useDispatch();

    const {
        file,
        submit,
        submitError,
        token,
    } = useSelector(({submitFile, user}) => ({
        file: submitFile.file,
        submit: submitFile.submit,
        submitError: submitFile.submitError,
        token: user.token
    }));

    const onSubmit = () => {
        let result = check();
        if (file === '') {
            alert('주소 인증 파일을 첨부해주세요');
        } else if (!result) {
            alert('마이 페이지에서 주소 인증 문서를 갱신 후 다시 시도해주세요.');
        } else {
            dispatch(
                submitFileAction({token, file})
            );
            move();
        }
    }

    useEffect(() => {
        if (submit) {
            console.log('success');
        }
        if (submitError) {
            console.log('fail')
        }
    })

    return (
        <div>
            <SubmitActionButton onSubmit={onSubmit}/>
        </div>
    );
};

export default ContainerSubmitActionButton;
