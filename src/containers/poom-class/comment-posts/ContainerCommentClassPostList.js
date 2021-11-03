import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import CommentClassPostList from "../../../components/routing-page/poom-class/comment-posts/CommentClassPostList";
import {classCommentListPosts} from "../../../modules/poom-class/classCommentPosts";


const ContainerCommentClassPostList = ({boardId}) => {
    const dispatch = useDispatch();

    const {posts, error, loading, user} = useSelector(
        ({classCommentPosts, loading, user}) => ({
            posts : classCommentPosts.posts,
            error : classCommentPosts.error,
            loading : loading['classCommentPosts/LIST_POSTS'],
            user : user.user
        }),
    );

    useEffect(() => {
        dispatch(classCommentListPosts(boardId));
    }, [dispatch]);

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
