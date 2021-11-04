import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {childcareSupportListPosts} from "../../../modules/childcare/childcareSupportPosts";
import SupportChildcarePostList
    from "../../../components/routing-page/childcare/support-posts/SupportChildcarePostList";

const ContainerSupportChildcarePostList = ({expertId}) => {
    const dispatch = useDispatch();

    const {posts, error, loading, user, token} = useSelector(
        ({childcareSupportPosts, loading, user}) => ({
            posts: childcareSupportPosts.posts,
            error: childcareSupportPosts.error,
            loading: loading['childcareSupportPosts/LIST_POSTS'],
            user : user.userInfo,
            token : user.userInfo.token,
        })
    );

    useEffect(() => {
        console.log("id " + expertId);
        dispatch(childcareSupportListPosts({token, expertId}));
    }, [dispatch, token, expertId]);

    return (
        <SupportChildcarePostList
            loading={loading}
            error={error}
            posts={posts}
            showWriteButton={user}
        />
    );
};

export default ContainerSupportChildcarePostList;
