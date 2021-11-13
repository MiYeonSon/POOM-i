import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {childcareSupportListPosts} from "../../../modules/childcare/childcareSupportPosts";
import ApplyChildcarePostList
    from "../../../components/routing-page/childcare/apply-posts/ApplyChildcarePostList";

const ContainerApplyChildcarePostList = ({writer, expertId}) => {
    const dispatch = useDispatch();

    const {posts, error, loading, token} = useSelector(
        ({childcareSupportPosts, loading, user}) => ({
            posts: childcareSupportPosts.posts,
            error: childcareSupportPosts.error,
            loading: loading['childcareSupportPosts/LIST_POSTS'],
            token : user.token,
        })
    );

    useEffect(() => {
        dispatch(childcareSupportListPosts({token, expertId}));
    }, [dispatch, token, expertId]);

    return (
        <ApplyChildcarePostList
            loading={loading}
            error={error}
            posts={posts}
            expertId={expertId}
            writer={writer}
        />
    );
};

export default ContainerApplyChildcarePostList;
