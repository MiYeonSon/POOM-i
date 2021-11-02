import React from 'react';
import {useSelector} from "react-redux";
import LoginBar from "../../../components/layout/header/LoginBar";

const ContainerLoginBar = () => {
    const {user} = useSelector(({user}) => ({user : user.user}));

    return (
        <LoginBar user={user} />
    );
};

export default ContainerLoginBar;
