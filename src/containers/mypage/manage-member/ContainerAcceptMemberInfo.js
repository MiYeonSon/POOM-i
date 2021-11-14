import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {listApplyMemberInfo} from "../../../modules/mypage/manage-member/applyInfo";
import AcceptMemberInfo from "../../../components/routing-page/mypage/manage-member/AcceptMemberInfo";

const ContainerAcceptMemberInfo = () => {
    const dispatch = useDispatch();

    const {members, error, loading, token} = useSelector(({applyInfo, loading, user}) => ({
        members: applyInfo.memberInfo,
        error: applyInfo.error,
        loading: loading['applyInfo/LIST_APPLY_MEMBER_INFO'],
        token: user.token
    }));

    useEffect(() => {
        dispatch(listApplyMemberInfo({token}));
    }, [dispatch, token]);


    return (
        <div>
            <AcceptMemberInfo
                members={members}
                error={error}
                loading={loading}
            />
        </div>
    );
};

export default ContainerAcceptMemberInfo;
