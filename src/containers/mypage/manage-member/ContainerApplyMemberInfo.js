import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {listApplyMemberInfo} from "../../../modules/mypage/manage-member/applyInfo";
import ApplyMemberInfo from "../../../components/routing-page/mypage/manage-member/ApplyMemberInfo";

const ContainerApplyMemberInfo = () => {
    const dispatch = useDispatch();

    const {members, error, loading, token} = useSelector(({applyInfo, loading, user}) => ({
        members : applyInfo.member,
        error : applyInfo.error,
        loading : loading['applyInfo/LIST_APPLY_MEMBER_INFO'],
        token : user.token
    }));

    useEffect(() => {
        dispatch(listApplyMemberInfo({token}));
    }, [dispatch, token]);


    return (
        <div>
            <ApplyMemberInfo
                members={members}
                error={error}
                loading={loading}
            />
        </div>
    );
};

export default ContainerApplyMemberInfo;
