import React from 'react';
import AskModal from "../AskModal";

const PostAskRemoveModal = ({visible, onConfirm}) => {
    return (
        <>
            <AskModal visible={visible}
                      description={"글을 정말 삭제하시겠습니까?"}
                      confirmText={'삭제'}
                      onConfirm={onConfirm}
            />
        </>
    );

};

export default PostAskRemoveModal;
