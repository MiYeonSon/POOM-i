import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getMyInfo} from "../../../modules/mypage/myInfo";
import CallingCard from "../../../components/routing-page/mypage/myInfo/CallingCard";
import UserInfoTable from "../../../components/routing-page/mypage/myInfo/UserInfoTable";

const ContainerMyInfo = () => {
    const dispatch = useDispatch();
    const {info, error, loading, token} = useSelector(
        ({myInfo, loading, user}) => ({
            info : myInfo.info,
            error : myInfo.error,
            loading : loading['myInfo/READ_MYINFO'],
            token : user.token
        })
    );

    useEffect(() => {
        dispatch(getMyInfo({token}));
    }, [dispatch, token]);

    return (
        <>
            <CallingCard info={info} error={error} loading={loading} />
            <UserInfoTable info={info} error={error} loading={loading} />
        </>
    );
};

export default ContainerMyInfo;
