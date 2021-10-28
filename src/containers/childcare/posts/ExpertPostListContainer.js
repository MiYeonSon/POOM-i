import React, {useEffect} from 'react';
import ExpertPostList from "../../../components/childcare/posts/ExpertPostList";
import {useDispatch, useSelector} from "react-redux";
import {expertListPosts} from "../../../modules/childcare/expertPosts";
import {withRouter} from "react-router-dom";

const ExpertPostListContainer = () => {
    const dispatch = useDispatch();
    const {expertPosts, error, loading, user} = useSelector(
        ({expertPosts, loading, user}) => ({
            expertPosts : expertPosts.expertPosts,
            error : expertPosts.error,
            loading : loading['posts/EXPERT_LIST_POSTS'],
            user : user.user
        })
    );

    useEffect(() => {
        dispatch(expertListPosts());
    }, [dispatch]);


    return (
        <ExpertPostList
            loading={loading}
            error={error}
            expertPosts={expertPosts}
            showWriteButton={user}
        />
    );
};

export default withRouter(ExpertPostListContainer);


