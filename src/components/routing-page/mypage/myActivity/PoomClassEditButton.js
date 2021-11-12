import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {setOriginalClass} from "../../../../modules/mypage/actionPoomClass";
import Modal from "../../../common/Modal";
import ContainerPoomInfoEditor from "../../../../containers/mypage/myActivity/ContainerPoomInfoEditor";
import ContainerPoomClassActionButtons from "../../../../containers/mypage/myActivity/ContainerPoomClassActionButtons";
import {BsPencilSquare} from "react-icons/bs";

const PoomClassEditButton = ({group}) => {
    const [editorModal, setEditorModal] = useState(false);

    const dispatch = useDispatch();

    const onEdit = async () => {
        await dispatch(setOriginalClass(group));
        setEditorModal(true);
    }

    return (
        <div style={{margin : '0 0.2  vw'}}>
            <BsPencilSquare size={23} color={'#AAAAAA'} onClick={onEdit} />
            {editorModal && (
                <Modal visible={editorModal} onClose={() => setEditorModal(false)}>
                    <ContainerPoomInfoEditor />
                    <ContainerPoomClassActionButtons />
                </Modal>
            )}
        </div>
    );
};

export default PoomClassEditButton;
