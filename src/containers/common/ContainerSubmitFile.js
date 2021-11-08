import React, {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changeField, initialize} from "../../modules/submitFile";
import SubmitFileButton from "../../components/common/SubmitFileButton";

const ContainerSubmitFile = () => {
    const dispatch = useDispatch();

    const {file} = useSelector(({submitFile}) => ({
        file: submitFile.file,
    }));

    const onChangeFiled = useCallback(payload => dispatch(changeField(payload)), [
        dispatch
    ]);

    useEffect(() => {
        return () => {
            dispatch(initialize());
        }
    }, [dispatch]);


    return (
        <SubmitFileButton onChangeField={onChangeFiled} file={file}/>
    );
};

export default ContainerSubmitFile;
