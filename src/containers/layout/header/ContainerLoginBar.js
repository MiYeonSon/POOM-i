import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import LoginBar from "../../../components/layout/header/LoginBar";
import {logout} from "../../../modules/user";

const ContainerLoginBar = () => {
    const dispatch = useDispatch();

    const {userInfo, token} = useSelector(({user}) => ({
        userInfo: user.userInfo,
        token : user.token
    }));

    const onLogout = () => {
        console.log(token);
        dispatch(logout());
    };

    return (
        <>
            <LoginBar user={userInfo} onLogout={onLogout}/>
        </>
    );
};

export default ContainerLoginBar;
