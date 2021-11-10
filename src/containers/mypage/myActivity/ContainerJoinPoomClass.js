import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {readClass} from "../../../modules/mypage/actionPoomClass";
import JoinPoomClass from "../../../components/routing-page/mypage/myActivity/JoinPoomClass";

const ContainerJoinPoomClass = ({groupId}) => {
    const dispatch = useDispatch();

    const {classInfo, classInfoError, loading, token}= useSelector(({actionPoomClass, loading, user}) => ({
        classInfo : actionPoomClass.classInfo,
        classInfoError : actionPoomClass.classInfoError,
        loading : loading['actionPoomClass/READ_CLASS'],
        token : user.token
    }));

    useEffect(() => {
        dispatch(readClass({token, groupId}));
    }, [dispatch]);

    return (
        <>
            <JoinPoomClass classInfo={classInfo} loading={loading} error={classInfoError} />
        </>
    );
};

export default ContainerJoinPoomClass;
