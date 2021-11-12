import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {readClass} from "../../../modules/mypage/actionPoomClass";
import JoinPoomClassInfo from "../../../components/routing-page/mypage/myActivity/JoinPoomClassInfos";
import {getChildList} from "../../../modules/detailInfo/detailInfo";

const ContainerJoinPoomClassInfos = ({groupId}) => {
    const dispatch = useDispatch();

    const {classInfo, classInfoError, loading, token}= useSelector(({actionPoomClass, loading, user}) => ({
        classInfo : actionPoomClass.classInfo,
        classInfoError : actionPoomClass.classInfoError,
        loading : loading['actionPoomClass/READ_CLASS'],
        token : user.token
    }));

    useEffect(() => {
        dispatch(getChildList(token));
        dispatch(readClass({token, groupId}));
    }, [dispatch, token, groupId]);

    return (
        <>
            <JoinPoomClassInfo classInfo={classInfo} loading={loading} error={classInfoError} />
        </>
    );
};

export default ContainerJoinPoomClassInfos;
