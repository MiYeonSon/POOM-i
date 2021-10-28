import React, {useState} from 'react';
import styled from 'styled-components';
import PostAskRemoveModal from "../../common/post/PostAskRemoveModal";
import Modal from "../../common/Modal";
import palette from "../../../lib/styles/palette";
import FindClassEditorContainer from "../../../containers/poom-class/write/FindClassEditorContainer";

const ActionButton = styled.button`
  height: fit-content;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  color: ${palette.gray[6]};
  font-weight: bold;
  border: none;
  outline: none;
  font-size: 0.875rem;
  cursor: pointer;


  &:hover {
    background: rgba(255, 182, 99, 0.7);
    color: white;
  }

  & + & {
    margin-left: 0.5rem;
  }
`;

const FindClassPostActonButtons = ({onEdit, onRemove}) => {
    const [removeModal, setRemoveModal] = useState(false);
    const [editorModal, setEditorModal] = useState(false);

    const onEditClick = () => {
        setEditorModal(true);
        onEdit();   // 기존 데이터 write가 상태 관리하도록 넘김.
    }

    const onRemoveClick = () => {
        setRemoveModal(true);
    };
    const onCancel = () => {
        setRemoveModal(false);
    };
    const onConfirm = () => {
        setRemoveModal(false);
        onRemove();
    };

    return (
        <>
            <div>
                <ActionButton onClick={onEditClick}>수정</ActionButton>
                <ActionButton onClick={onRemoveClick}>삭제</ActionButton>
            </div>

            {editorModal && <Modal><FindClassEditorContainer /></Modal>}

            {removeModal && <Modal>
                <PostAskRemoveModal
                visible={removeModal}
                onConfirm={onConfirm}
                onCancel={onCancel}
                />
                </Modal>
            }
        </>
    );
};

export default FindClassPostActonButtons;
