import React, {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changeField, initialize} from "../../../modules/mypage/actionPoomClass";
import CreatePoomClass from "../../../components/routing-page/mypage/myActivity/CreatePoomClass";

const ContainerPoomInfoEditor = () => {
    const dispatch = useDispatch();
    const {
        title,
        meetingDay,
        mainActivity,
        description,
        recruitmentStatus,
        profileImage,
    } = useSelector(({
        actionPoomClass,
    }) => ({
        title: actionPoomClass.title,
        meetingDay : actionPoomClass.meetingDay,
        mainActivity : actionPoomClass.mainActivity,
        description : actionPoomClass.description,
        recruitmentStatus : actionPoomClass.recruitmentStatus,
        profileImage : actionPoomClass.profileImage,
    }));

    const onChangeField = useCallback(payload => dispatch(changeField(payload)), [dispatch]);

    useEffect(() => {
        return () => {
            dispatch(initialize());
        }
    },[dispatch]);

    return (
        <CreatePoomClass onChangeField={onChangeField}
                         title={title}
                         meetingDay={meetingDay}
                         mainActivity={mainActivity}
                         description={description}
                         recruitmentStatue={recruitmentStatus}
                         profileImage={profileImage}
        />
    );
};

export default ContainerPoomInfoEditor;
