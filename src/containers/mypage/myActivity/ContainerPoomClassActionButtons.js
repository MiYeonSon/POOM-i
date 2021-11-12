import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {createClass, updateClass} from "../../../modules/mypage/actionPoomClass";
import PoomClassActionButtons from "../../../components/routing-page/mypage/myActivity/PoomClassActionButtons";

const ContainerPoomClassActionButtons = () => {
    const dispatch = useDispatch();

    const {
        title,
        meetingDay,
        mainActivity,
        description,
        recruitmentStatus,
        profileImage,
        originalClassId,
        poomClass,
        poomClassError,
        token
    } = useSelector(({
                         actionPoomClass,
                         user
                     }) => ({
        title: actionPoomClass.title,
        meetingDay: actionPoomClass.meetingDay,
        mainActivity: actionPoomClass.mainActivity,
        description: actionPoomClass.description,
        recruitmentStatus: actionPoomClass.recruitmentStatus,
        profileImage: actionPoomClass.profileImage,
        originalClassId: actionPoomClass.originalClassId,
        poomClass: actionPoomClass.poomClass,
        poomClassError: actionPoomClass.poomClassError,
        token: user.token
    }));

    const onPublish = async () => {
        if (originalClassId) {
            dispatch(updateClass({
                title,
                meetingDay,
                mainActivity,
                description,
                recruitmentStatus,
                profileImage,
                groupId : originalClassId,
                token
            }));
            return;
        }

        await dispatch(
            createClass({
                title,
                meetingDay,
                mainActivity,
                description,
                recruitmentStatus,
                profileImage,
                token,
            })
        );
    };

    useEffect(() => {
        if (poomClass) {
            window.location.reload();
        }

        if (poomClassError) {
            console.log(poomClassError);
        }
    }, [dispatch, poomClass, poomClassError]);


    return (
        <>
            <PoomClassActionButtons
                onClick={onPublish}
                isEdit={!!originalClassId}
            />
        </>
    );
};

export default ContainerPoomClassActionButtons;
