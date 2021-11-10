import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {createClass} from "../../../modules/mypage/actionPoomClass";
import RectButton from "../../../components/common/RectButton";

const ContainerCreateActionButton = () => {
    const dispatch = useDispatch();

    const {
        title,
        meetingDay,
        mainActivity,
        description,
        recruitmentStatus,
        profileImage,
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
        poomClass : actionPoomClass.poomClass,
        poomClassError : actionPoomClass.poomClassError,
        token: user.token
    }));

    const onCreate = async () => {
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
        if(poomClass) {
            window.location.reload();
        }

        if(poomClassError){
            console.log(poomClassError);
        }
    }, [dispatch]);


    return (
        <>
            <RectButton onClick={onCreate} backgroundColor={'#FFB663'}>품앗이 반 생성하기</RectButton>
        </>
    );
};

export default ContainerCreateActionButton;
