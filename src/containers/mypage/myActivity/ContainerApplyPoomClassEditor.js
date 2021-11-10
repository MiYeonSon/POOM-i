import React, {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import ApplyPoomClassEditor from "../../../components/routing-page/mypage/myActivity/ApplyPoomClassEditor";
import {changeField, initialize} from "../../../modules/mypage/applyPoomClass";
import {getChildList} from "../../../modules/detailInfo/detailInfo";

const ContainerApplyPoomClassEditor = () => {
    const dispatch = useDispatch();

    const {contents, childId, token} = useSelector(({
                                                        applyPoomClass,
                                                        user
                                                    }) => ({
        contents: applyPoomClass.contents,
        childId: applyPoomClass.childId,
        token: user.token
    }));

    const onChangeField = useCallback(payload => dispatch(changeField(payload)), [dispatch]);

    useEffect(() => {

        return () => {
            dispatch(initialize());
        };
    }, [dispatch, token]);


    return (
        <ApplyPoomClassEditor onChangeField={onChangeField} contents={contents} childId={childId}/>
    );
};

export default ContainerApplyPoomClassEditor;
