import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {listApplyForm} from "../../../modules/mypage/manage-member/applyInfo";
import AcceptFormInfo from "../../../components/routing-page/mypage/manage-member/AcceptFormInfo";

const ContainerAcceptFormList = () => {
    const dispatch = useDispatch();

    const {formList, error, loading, token} = useSelector(({applyInfo, loading, user}) => ({
        formList: applyInfo.formInfo,
        error: applyInfo.formInfoError,
        loading: loading['applyInfo/LIST_APPLY_FORM'],
        token: user.token
    }));

    useEffect(() => {
        dispatch(listApplyForm({token}));
    }, [dispatch, token]);

    return (
        <>
            <AcceptFormInfo
                formList={formList}
                error={error}
                loading={loading}
            />
        </>
    );
};

export default ContainerAcceptFormList;
