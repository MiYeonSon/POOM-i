import React, {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changeField, initialize} from "../../../modules/poom-class/classWrite";
import FindClassEditor from "../../../components/routing-page/poom-class/write/FindClassEditor";
import FindClassWriteActionButtonsContainer from "./ContainerFindClassWriteActionButtons";

const ContainerFindClassEditor = () => {
    const dispatch = useDispatch();

    const {groupId, contents, images} = useSelector(({classWrite}) => ({
        groupId: classWrite.groupId,
        contents: classWrite.contents,
        images: classWrite.images
    }));

    const {classList} = useSelector(({detailInfo}) => ({
        classList : detailInfo.classList
    }));

    const onChangeField = useCallback(payload => dispatch(changeField(payload)), [
        dispatch
    ]);

    useEffect(() => {
        return () => {
            dispatch(initialize());
        }
    }, [dispatch]);

    return (
        <>
            <FindClassEditor onChangeField={onChangeField}
                             groupId={groupId}
                             contents={contents}
                             images={images}
                             classList={classList}
            />
            <FindClassWriteActionButtonsContainer/>
        </>

    );
};

export default ContainerFindClassEditor;
