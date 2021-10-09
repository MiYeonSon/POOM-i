import React from 'react';
import {useDispatch} from "react-redux";
import {actionCreators as userActions} from "../../modules/naver";
import Loading from "../common/Loading";

const NaverOauthRedirectHandler = () => {
    const dispatch = useDispatch();

    let code = new URL(window.location.href).searchParams.get("code");

    React.useEffect(async () => {
        await dispatch(userActions.naverLogin(code));
    }, []);

    return (
        <Loading />
    );
};

export default NaverOauthRedirectHandler;
