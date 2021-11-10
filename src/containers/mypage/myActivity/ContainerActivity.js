import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {listActivity} from "../../../modules/mypage/activityInfo";
import ChildList from "../../../components/routing-page/mypage/myActivity/ChildList";
import {ContentMiddleHeader} from "../../../components/common/StyledHeader";
import PoomClassList from "../../../components/routing-page/mypage/myActivity/PoomClassList";

const ContainerActivity = () => {
    const dispatch = useDispatch();

    const {list, error, loading, token} = useSelector(
        ({activityInfo, loading, user}) => ({
            list: activityInfo.list,
            error: activityInfo.error,
            loading: loading['activityInfo/LIST_ACTIVITY'],
            token: user.token
        })
    );

    useEffect(() => {
        dispatch(listActivity({token}));
    }, [dispatch]);

    return (
        <>
            <ContentMiddleHeader>자녀 관리</ContentMiddleHeader>
            <ChildList loading={loading} error={error} list={list}/>

            <ContentMiddleHeader>품앗이 반 관리</ContentMiddleHeader>
            <PoomClassList loading={loading} error={error} list={list}/>
        </>
    );
};

export default ContainerActivity;
