import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {writePost} from "../../../modules/childcare/childcareSupportWrite";
import SupportChildcareWriteActionButtons
    from "../../../components/routing-page/childcare/support-write/SupportChildcareWriteActionButtons";

const ContainerSupportChildcareWriteActonButtons = () => {
    const dispatch = useDispatch();

    const {childId, contents, expertId, post, postError, token} = useSelector(({childcareSupportWrite, user}) => ({
        childId: childcareSupportWrite.childId,
        contents: childcareSupportWrite.contents,
        expertId : childcareSupportWrite.expertId,
        post: childcareSupportWrite.post,
        postError: childcareSupportWrite.postError,
        token: user.token
    }));

    const processChildId = childId === 'null' ? null : childId;

    const onPublish = () => {
        dispatch(writePost({
            token,
            expertId,
            processChildId,
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
        <SupportChildcareWriteActionButtons onPublish={onPublish} />
    );
};

export default ContainerSupportChildcareWriteActonButtons;
