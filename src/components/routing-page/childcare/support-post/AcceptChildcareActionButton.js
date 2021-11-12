import React, {useState} from 'react';
import styled from "styled-components";
import RectButton from "../../../common/RectButton";
import Modal from "../../../common/Modal";
import {acceptChildcare} from "../../../../lib/api/childcare/childcareAccept";

const ActionButtonBlock = styled.div`
  box-sizing: border-box;
  width: 100%;
  text-align: right;
`;

const AcceptChildcareActionButton = ({token, expertId, applyId}) => {
    const [acceptModal, setAcceptModal] = useState(false);

    const onAcceptClick = () => {
        setAcceptModal(true);
    };

    const onAccept = async () => {
        await acceptChildcare({token, expertId, applyId});
        window.location.reload();
    }

    return (
        <>
            <ActionButtonBlock>
                <RectButton onClick={onAcceptClick} backgroundColor={'#FFB663'}>수락</RectButton>
            </ActionButtonBlock>

            {
                acceptModal &&
                <Modal visible={acceptModal} onClose={() => setAcceptModal(false)}>
                    <div style={{textAlign: 'center'}}>
                        <div style={{margin: '3vw', fontSize: '1.1vw', lineHeight : '1.5vw'}}>
                            해당 사용자와 <br/>
                            품앗이를 진행 하시겠습니까?
                        </div>
                        <RectButton backgroundColor={'#FFB663'} type={'button'} onClick={onAccept}>승인하기</RectButton>
                    </div>
                </Modal>
            }


        </>
    );
};

export default AcceptChildcareActionButton;
