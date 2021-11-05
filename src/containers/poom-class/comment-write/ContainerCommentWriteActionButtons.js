import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {writePost} from "../../../modules/poom-class/classCommentWrite";
import CommentClassWriteActionButtons
    from "../../../components/routing-page/poom-class/comment-write/CommentClassWriteActionButtons";

const ContainerCommentWriteActionButtons = () => {
    const dispatch = useDispatch();

    const {boardId, contents, post, postError, token} = useSelector(({classCommentWrite, user}) => ({
        boardId: classCommentWrite.boardId,
        contents: classCommentWrite.contents,
        post: classCommentWrite.post,
        postError: classCommentWrite.postError,
        token: user.token
    }));


    const onPublish = () => {
        dispatch(
            writePost({
                token,
                boardId,
                contents
            })
        );
    };

    useEffect(() => {
        if (post) {
            window.location.reload();
        }

        if (postError) {
            console.log(postError);
        }
    }, [post, postError]);

    return (
        <CommentClassWriteActionButtons onPublish={onPublish}/>
    );
};

export default ContainerCommentWriteActionButtons;
