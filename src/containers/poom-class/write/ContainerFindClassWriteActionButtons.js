import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {classUpdatePost, classWritePost} from "../../../modules/poom-class/classWrite";
import FindClassWriteActionButtons from "../../../components/routing-page/poom-class/write/FindClassWriteActionButtons";
import {withRouter} from "react-router-dom";

const ContainerFindClassWriteActionButtons = ({history}) => {
    const dispatch = useDispatch();

    const {
        groupId,
        contents,
        images,
        post,
        postError,
        remove_images,
        originalPostId
    } = useSelector(({classWrite}) => ({
        groupId: classWrite.groupId,
        contents: classWrite.contents,
        images: classWrite.images,
        post: classWrite.post,
        postError: classWrite.postError,
        remove_images: classWrite.remove_images,
        originalPostId: classWrite.originalPostId
    }));
    const {token} = useSelector(({user}) => ({token: user.userInfo.token}));

    const onPublish = () => {
        if (originalPostId) {
            dispatch(classUpdatePost({
                token,
                groupId,
                contents,
                remove_images,
                images,
                originalPostId
            }));
            history.push('/class');
            return;
        }

        dispatch(classWritePost({
                token,
                groupId,
                contents,
                images
            }),
        )

    };

    useEffect(() => {
        if(post){
            history.push('/class');
        }
        if (postError) {
            console.log(postError);
        }

    }, [history, post, postError]);

    return (
        <FindClassWriteActionButtons onPublish={onPublish} isEdit={!!originalPostId}/>
    );
};

export default withRouter(ContainerFindClassWriteActionButtons);
