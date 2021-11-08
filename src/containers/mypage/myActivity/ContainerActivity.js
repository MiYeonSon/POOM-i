import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {listActivity} from "../../../modules/mypage/activityInfo";
import ChildList from "../../../components/routing-page/mypage/myActivity/ChildList";

const ContainerActivity = () => {
    const dispatch = useDispatch();

    const {list, error, loading, token} = useSelector(
        ({activityInfo, loading, user}) => ({
            list : activityInfo.list,
            error : activityInfo.error,
            loading : loading['activityInfo/LIST_ACTIVITY'],
            token : user.token
        })
    );

    useEffect(() => {
        console.log(token)
        dispatch(listActivity({token}));
    }, [dispatch]);

    return (
        <ChildList loading={loading} error={error} list={list} />
            
    );
};

export default ContainerActivity;
