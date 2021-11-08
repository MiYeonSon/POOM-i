import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import SubmitActionButton from "../../components/common/SubmitActionButton";
import {submitFileAction} from "../../modules/submitFile";

const ContainerSubmitActionButton = () => {
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
        dispatch(
            submitFileAction({token, file})
        );
    }

    useEffect(() => {
        if (submit) {
            console.log('success')
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
