import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {classUpdatePost, classWritePost} from "../../../modules/poom-class/classWrite";
import FindClassWriteActionButtons from "../../../components/routing-page/poom-class/write/FindClassWriteActionButtons";

const ContainerFindClassWriteActionButtons = () => {
    const dispatch = useDispatch();

    const {
        groupId,
        contents,
        images,
        post,
        postError,
        remove_images,
        originalPostId,
        token
    } = useSelector(({classWrite, user}) => ({
        groupId: classWrite.groupId,
        contents: classWrite.contents,
        images: classWrite.images,
        post: classWrite.post,
        postError: classWrite.postError,
        remove_images: classWrite.remove_images,
        originalPostId: classWrite.originalPostId,
        token : user.token
    }));

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
            window.location.reload();
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
            window.location.reload();
        }
        if (postError) {
            console.log(postError);
        }

    }, [post, postError]);

    return (
        <FindClassWriteActionButtons onPublish={onPublish} isEdit={!!originalPostId}/>
    );
};

export default ContainerFindClassWriteActionButtons;
