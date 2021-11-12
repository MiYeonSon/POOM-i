import React, {useState} from 'react';
import styled from "styled-components";
import Modal from "../../../common/Modal";
import VoteModalContent from "./VoteModalContent";


const PoomFormItemBlock = styled.div`
  box-sizing: border-box;
  margin: 1vw 0;
  padding: 2vw 2vw;
  width: 100%;
  display: flex;
  justify-content: space-between;

  font-size: 1.2vw;

  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border: 1px solid #AAAAAA;
  border-radius: 14px;

  cursor: pointer;
`;

const PoomFormItem = ({form}) => {
    const {vote_id, registrant, address, detail_address} = form;

    const [voteModal, setVoteModal] = useState(false);

    return (
        <>
            <PoomFormItemBlock onClick={() => setVoteModal(true)}>
                <div>
                    {address} {detail_address}
                </div>
                <div style={{marginTop: '0.2vw', fontSize: '1vw', fontWeight: '700'}}>
                    투표하기 >
                </div>
            </PoomFormItemBlock>
            {voteModal && (
                <Modal visible={voteModal} onClose={() => setVoteModal(false)}>
                    <VoteModalContent voteId={vote_id}/>
                </Modal>
            )}

        </>
    );
};


const PoomFormList = ({forms, loading, error}) => {
    if (error) {
        return <div>에러 발생</div>
    }

    return (
        <div>
            {!loading && forms && (
                <div>
                    {forms.data.map(form => (
                        <PoomFormItem form={form} key={form.vote_id}/>
                    ))}
                </div>
            )}
        </div>
    );
};

export default PoomFormList;
