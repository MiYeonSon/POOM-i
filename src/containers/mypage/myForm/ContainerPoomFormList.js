import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {listForm} from "../../../modules/mypage/spaceFormInfo";
import PoomFormList from "../../../components/routing-page/mypage/myForm/PoomFormList";

const ContainerPoomFormList = () => {
    const dispatch = useDispatch();

    const {forms, error, loading, token} = useSelector(
        ({spaceFormInfo, loading, user}) => ({
            forms: spaceFormInfo.forms,
            error: spaceFormInfo.error,
            loading: loading['spaceFormInfo/LIST_FORM'],
            token: user.token
        })
    );

    useEffect(() => {
        dispatch(listForm({token}));
    }, [dispatch, token]);

    return (
        <>
            <PoomFormList loading={loading}
                          error={error}
                          forms={forms}
            />
        </>
    );
};

export default ContainerPoomFormList;
