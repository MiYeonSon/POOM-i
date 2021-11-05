import React, {useEffect} from 'react';
import CommentClassPostList from "../../../components/routing-page/poom-class/comment-posts/CommentClassPostList";
import {useDispatch, useSelector} from "react-redux";
import {classCommentListPosts} from "../../../modules/poom-class/classCommentPosts";

const ContainerCommentClassPostList = ({boardId}) => {
    const dispatch = useDispatch();

    const {posts, error, loading, user, token} = useSelector(
        ({classCommentPosts, loading, user}) => ({
            posts: classCommentPosts.posts,
            error: classCommentPosts.error,
            loading: loading['classCommentPosts/LIST_POSTS'],
            user: user.userInfo,
            token : user.token
        }),
    );

    useEffect(() => {
        dispatch(classCommentListPosts({token, boardId}));
    }, [dispatch, token, boardId]);

    return (
        <CommentClassPostList
            loading={loading}
            error={error}
            posts={posts}
            showWriteButton={user}
        />
    );
};

export default ContainerCommentClassPostList;
