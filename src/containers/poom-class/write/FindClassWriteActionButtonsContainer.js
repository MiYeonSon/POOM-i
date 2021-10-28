import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {classUpdatePost, classWritePost} from "../../../modules/poom-class/classWrite";
import FindClassWriteActionButtons from "../../../components/poom-class/write/FindClassWriteActionButtons";
import {withRouter} from "react-router-dom";

const FindClassWriteActionButtonsContainer = ({history}) => {
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
        images : classWrite.images,
        post: classWrite.post,
        postError: classWrite.postError,
        remove_images: classWrite.remove_images,
        originalPostId: classWrite.originalPostId
    }));

    const onPublish = () => {
        if (originalPostId) {
            dispatch(classUpdatePost({groupId, contents, remove_images, images, originalPostId}));
            window.location.replace('/class');
            return;
        }

        dispatch(classWritePost({
                groupId,
                contents,
                images
            }),
        );
        window.location.replace('/class');

    };

    useEffect(() => {
        if (post) {
            window.location.replace('/class');
        }
        if (postError) {
            console.log(postError);
        }

    }, [history, post, postError]);

    return (
        <FindClassWriteActionButtons onPublish={onPublish} isEdit={!!originalPostId}/>
    );
};

export default withRouter(FindClassWriteActionButtonsContainer);
