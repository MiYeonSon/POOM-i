import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import LoginBar from "../../../components/layout/header/LoginBar";
import {logout} from "../../../modules/user";
import {withRouter} from "react-router-dom";

const ContainerLoginBar = ({history}) => {
    let {userInfo} = useSelector(({user}) => ({userInfo: user.userInfo}));

    const dispatch = useDispatch();
    const onLogout = () => {
        dispatch(logout());
        history.push('/');
    };

    return (
        <>
            <LoginBar userInfo={userInfo} onLogout={onLogout}/>
        </>
    );
};

export default withRouter(ContainerLoginBar);
