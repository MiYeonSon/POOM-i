import React from 'react';
import {useDispatch} from "react-redux";
import {actionCreators as userActions} from "../../../modules/oAuth/google";
import Loading from "../../common/Loading";

const GoogleOauthRedirectHandler = (props) => {
    const dispatch = useDispatch();

    let code = new URL(window.location.href).searchParams.get("code");

    React.useEffect(async () => {
        await dispatch(userActions.googleLogin(code));
    }, []);

    return (
        <Loading />
    );
};

export default GoogleOauthRedirectHandler;

