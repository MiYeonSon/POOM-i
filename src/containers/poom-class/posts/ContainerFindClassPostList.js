import React, {useEffect} from 'react';
import FindClassPostList from "../../../components/routing-page/poom-class/posts/FindClassPostList";
import {useDispatch, useSelector} from "react-redux";
import {classListPosts} from "../../../modules/poom-class/classPosts";
import {getClassList} from "../../../modules/detailInfo/detailInfo";

const ContainerFindClassPostList = () => {
    const dispatch = useDispatch();

    const {posts, error, loading, user} = useSelector(
        ({classPosts, loading, user}) => ({
            posts : classPosts.posts,
            error : classPosts.error,
            loading : loading['classPosts/LIST_POSTS'],
            user : user.user
        }),
    );

    const {token} = useSelector(({user}) => ({token: user.userInfo.token}));

    useEffect(() => {
        dispatch(classListPosts(token));
        dispatch(getClassList(token));
    }, [dispatch, token]);


    return (
        <FindClassPostList
            loading={loading}
            error={error}
            posts={posts}
        />
    );
};

export default ContainerFindClassPostList;
