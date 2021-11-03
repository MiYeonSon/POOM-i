import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import LoginBar from "../../../components/layout/header/LoginBar";
import {logout} from "../../../modules/user";

const ContainerLoginBar = () => {
    let {user} = useSelector(({user}) => ({user: user.userInfo.user}));

    const dispatch = useDispatch();
    const onLogout = () => {
        dispatch(logout());
    };

    return (
        <>
            <LoginBar user={user} onLogout={onLogout}/>
        </>
    );
};

export default ContainerLoginBar;
