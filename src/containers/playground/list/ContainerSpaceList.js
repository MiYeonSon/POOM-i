import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {readList} from "../../../modules/playground/list/playgroundList";
import SpaceListViewer from "../../../components/routing-page/playground/list/SpaceListViewer";

const ContainerSpaceList = () => {
    const dispatch = useDispatch();

    const {list, listError, loading, token} = useSelector(
        ({playgroundList, loading, user}) => ({
            list: playgroundList.list,
            listError: playgroundList.listError,
            loading: loading['playgroundList/READ_LIST'],
            token: user.token
        }));

    useEffect(() => {
        dispatch(readList({token}));
    }, [dispatch, token]);

    return (
        <SpaceListViewer list={list} loading={loading} error={listError}/>
    );
};

export default ContainerSpaceList;
