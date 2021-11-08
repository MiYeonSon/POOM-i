import React, {useState} from 'react';
import styled from 'styled-components';
import palette from "../../../../lib/styles/palette";
import PostAskRemoveModal from "../../../common/post/PostAskRemoveModal";
import Modal from "../../../common/Modal";
import ContainerSupportChildcareEditor
    from "../../../../containers/childcare/support-write/ContainerSupportChildcareEditor";


const PostActionButtonsBlock = styled.div`
  box-sizing: border-box;
  width: 100%;
  text-align: right;
`;

const ActionButton = styled.button`
  height: fit-content;
  border-radius: 4px;
  color: ${palette.gray[6]};
  background-color: #DEDEDE;
  font-weight: bold;
  border: none;
  outline: none;
  font-size: 0.8vw;
  cursor: pointer;


  &:hover {
    background:#AAAAAA;
    color: white;
  }

  & + & {
    margin-left: 0.5rem;
  }
`;


const SupportChildcarePostActionButtons = ({onEdit, onRemove}) => {
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
        window.location.reload();
    };


    return (
        <>
            <PostActionButtonsBlock>
                <ActionButton onClick={onEditClick}>수정</ActionButton>
                <ActionButton onClick={onRemoveClick}>삭제</ActionButton>
            </PostActionButtonsBlock>

            {editorModal &&
            <Modal visible={editorModal} onClose={() => setEditorModal(false)}><ContainerSupportChildcareEditor/></Modal>}


            {removeModal && <Modal visible={removeModal} onClose={() => setRemoveModal(false)}>
                <PostAskRemoveModal
                    onConfirm={onConfirm}
                />
            </Modal>}
        </>
    );
};

export default SupportChildcarePostActionButtons;