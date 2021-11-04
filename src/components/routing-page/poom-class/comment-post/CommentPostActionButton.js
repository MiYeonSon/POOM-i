import React, {useState} from 'react';
import ActionButton from "../../../common/post/ActionButton";
import Modal from "../../../common/Modal";
import CommentAskRemoveModal from "./CommentAskRemoveModal";

const CommentPostActionButton = ({backgroundColor, hoverColor, color, onRemove}) => {
    const [removeModal, setRemoveModal] = useState(false);

    const onRemoveClick = () => {
        setRemoveModal(true);
    };

    const onRemoveCancel = () => {
        setRemoveModal(false);
    };

    const onConfirm = () => {
        setRemoveModal(false);
        onRemove();
    };

    return (
        <>
            <ActionButton backgroundColor={backgroundColor} hoverColor={hoverColor} color={color}  onClick={onRemoveClick}>삭제</ActionButton>
            {removeModal && <Modal visible={onRemoveClick} onClose={onRemoveCancel}>
                <CommentAskRemoveModal
                    visible={removeModal}
                    onConfirm={onConfirm}
                />
            </Modal>
            }
        </>
    );
};

export default CommentPostActionButton;
