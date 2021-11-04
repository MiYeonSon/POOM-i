import React, {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changeField, initialize} from "../../../modules/childcare/childcareSupportWrite";
import SupportChildcareEditor from "../../../components/routing-page/childcare/support-write/SupportChildcareEditor";

const ContainerSupportChildcareEditor = () => {
    const dispatch = useDispatch();
    const {childId, contents} = useSelector(({childcareSupportWrite}) => ({
        childId : childcareSupportWrite.childId,
        contents : childcareSupportWrite.contents
    }));


    const onChangeFiled = useCallback(payload => dispatch(changeField(payload)), [
        dispatch,
    ]);



    useEffect(() => {
        return () => {
            dispatch(initialize());
        }
    }, [dispatch]);

    return (
        <SupportChildcareEditor onChangeField={onChangeFiled} childId={childId} contents={contents} />
    );
};

export default ContainerSupportChildcareEditor;
