import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getExpertId, updatePost, writePost} from "../../../modules/childcare/childcareSupportWrite";
import SupportChildcareWriteActionButtons
    from "../../../components/routing-page/childcare/support-write/SupportChildcareWriteActionButtons";

const ContainerSupportChildcareWriteActonButtons = () => {
    const dispatch = useDispatch();

    const {childId, contents, expertId, post, postError, originalPostId, token} = useSelector(({childcareSupportWrite, user}) => ({
        childId: childcareSupportWrite.childId,
        contents: childcareSupportWrite.contents,
        expertId : childcareSupportWrite.expertId,
        post: childcareSupportWrite.post,
        postError: childcareSupportWrite.postError,
        originalPostId : childcareSupportWrite.originalPostId,
        token: user.token
    }));

    // 품앗이 포스트에 대한 지원 및 자원
    const onPublish = async () => {
        if(originalPostId){
            dispatch(updatePost({
                token,
                expertId,
                childId,
                contents,
                applyId : originalPostId
            }));
            return;
        }

        dispatch(writePost({
            token,
            expertId,
            childId,
            contents,
        }))
    }

    useEffect(() => {
        if (post) {
            window.location.reload();
        }
        if (postError) {
            console.log(postError);
        }
    }, [post, postError]);

    return (
        <SupportChildcareWriteActionButtons onPublish={onPublish} isEdit={!!originalPostId}/>
    );
};

export default ContainerSupportChildcareWriteActonButtons;
