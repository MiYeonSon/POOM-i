import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import LoginBar from "../../../components/layout/header/LoginBar";
import {logout} from "../../../modules/user";
import {withRouter} from "react-router-dom";

const ContainerLoginBar = ({history}) => {
    const dispatch = useDispatch();

    const {userInfo, token} = useSelector(({user}) => ({
        userInfo: user.userInfo,
        token : user.token
    }));

    const onLogout = () => {
        console.log(token);
        dispatch(logout());
        history.push('/');
    };

    return (
        <>
            <LoginBar user={userInfo} onLogout={onLogout}/>
        </>
    );
};

export default withRouter(ContainerLoginBar);
