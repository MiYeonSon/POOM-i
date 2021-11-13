import React, {useState} from 'react';
import styled from 'styled-components';
import palette from "../../../../lib/styles/palette";
import PostAskRemoveModal from "../../../common/post/PostAskRemoveModal";
import Modal from "../../../common/Modal";
import ContainerApplyChildcareEditor
    from "../../../../containers/childcare/apply-write/ContainerApplyChildcareEditor";
import ActionButton from "../../../common/post/ActionButton";


const PostActionButtonsBlock = styled.div`
  box-sizing: border-box;
  width: 100%;
  text-align: right;
`;




const ApplyChildcarePostActionButtons = ({onEdit, onRemove}) => {
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
            <Modal visible={editorModal} onClose={() => setEditorModal(false)}><ContainerApplyChildcareEditor/></Modal>}


            {removeModal && <Modal visible={removeModal} onClose={() => setRemoveModal(false)}>
                <PostAskRemoveModal
                    onConfirm={onConfirm}
                />
            </Modal>}
        </>
    );
};

export default ApplyChildcarePostActionButtons;