import React, {useState} from 'react';
import styled from 'styled-components';

import ContainerChildcareEditor from "../../../../containers/childcare/write/ContainerChildcareEditor";
import PostAskRemoveModal from "../../../common/post/PostAskRemoveModal";
import Modal from "../../../common/Modal";
import ActionButton from "../../../common/post/ActionButton";

const PostActionButtonsBlock = styled.div`
  box-sizing: border-box;
  width: fit-content;
  margin: 0.5vw 0;
`;

const ChildcarePostActionButtons = ({onEdit, onRemove}) => {
    const [removeModal, setRemoveModal] = useState(false);
    const [editorModal, setEditorModal] = useState(false);

    const onEditClick = () => {
        setEditorModal(true);
        onEdit();   // 기존 데이터 write가 상태 관리하도록 넘김.
    }
    const onRemoveClick = () => {
        setRemoveModal(true);
    };

    const onConfirm = () => {
        setRemoveModal(false);
        onRemove();
    };

    return (
        <>
            <PostActionButtonsBlock>
                <ActionButton onClick={onEditClick}>수정</ActionButton>
                <ActionButton onClick={onRemoveClick}>삭제</ActionButton>
            </PostActionButtonsBlock>

            {editorModal && (
                <Modal visible={editorModal} onClose={() => setEditorModal(false)}><ContainerChildcareEditor/></Modal>
            )}

            {removeModal && (
                <Modal visible={removeModal} onClose={() => setRemoveModal(false)}>
                    <PostAskRemoveModal onConfirm={onConfirm}/>
                </Modal>
            )}
        </>
    );
};

export default ChildcarePostActionButtons;