import React from 'react';
import ContainerCommentClassPostList from "../../../containers/poom-class/comment-posts/ContainerCommentClassPostList";
import ContainerCommentClassEditor from "../../../containers/poom-class/comment-write/ContainerCommentClassEditor";
import ContainerCommentWriteActionButtons
    from "../../../containers/poom-class/comment-write/ContainerCommentWriteActionButtons";

const CommentClassBlock = ({boardId}) => {
    return (
        <div>
            <ContainerCommentClassPostList boardId={boardId}/>
            <ContainerCommentClassEditor/>
            <ContainerCommentWriteActionButtons/>
        </div>
    );
};

export default CommentClassBlock;
