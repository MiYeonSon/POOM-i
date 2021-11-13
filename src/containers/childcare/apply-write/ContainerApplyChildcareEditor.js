import React, {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changeField, initialize} from "../../../modules/childcare/childcareSupportWrite";
import ApplyChildcareEditor from "../../../components/routing-page/childcare/apply/ApplyChildcareEditor";
import ContainerApplyChildcareWriteActonButtons from "./ContainerApplyChildcareWriteActonButtons";

const ContainerApplyChildcareEditor = () => {
    const dispatch = useDispatch();
    const {childId, contents, childList} = useSelector(({childcareSupportWrite, detailInfo}) => ({
        childId: childcareSupportWrite.childId,
        contents: childcareSupportWrite.contents,
        childList: detailInfo.childList
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
        <>
            <ApplyChildcareEditor onChangeField={onChangeFiled}
                                  childId={childId}
                                  contents={contents}
                                  childList={childList}/>
            <ContainerApplyChildcareWriteActonButtons />
        </>
    );
};

export default ContainerApplyChildcareEditor;
