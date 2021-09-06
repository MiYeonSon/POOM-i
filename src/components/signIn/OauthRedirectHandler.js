import React from 'react';
import {useDispatch} from 'react-redux';
import { userActions } from "./redux/modules/user";
import MoonLoader from "react-spinners";
/*
const OauthRedirectHandler = (props) => {
    const dispatch = useDispatch();

    let code = new URL(window.location.href).searchParams.get("code");

    React.useEffect(async () => {
        await dispatch(userActions.kakaoLogin(code));
    }, []);

    return (
        <div>
            <MoonLoader />
        </div>
    );
};

export default OauthRedirectHandler;

 */
