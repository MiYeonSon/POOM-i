import React from 'react';
import AskModal from "../../../common/AskModal";

const CommentAskRemoveModal = ({visible, onConfirm}) => {
    return (
        <>
            <AskModal visible={visible}
                      description={"댓글을 정말 삭제하시겠습니까?"}
                      confirmText={'삭제'}
                      onConfirm={onConfirm}
            />
        </>
    );
};

export default CommentAskRemoveModal;
