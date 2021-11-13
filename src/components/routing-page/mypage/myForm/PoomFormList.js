import React, {useState} from 'react';
import styled from "styled-components";
import Modal from "../../../common/Modal";
import VoteSpaceInfo from "./VoteSpaceInfo";
import ContainerVoteSpaceInfo from "../../../../containers/mypage/myForm/ContainerVoteSpaceInfo";

const CursorBlock = styled.div`
  .closed {
    width: 100%;
    height: 100%;
    cursor: default;
    position: relative;
  }
`;

const PoomFormItemBlock = styled.div`
  box-sizing: border-box;
  margin: 1vw 0;
  padding: 2vw 2vw;

  width: 100%;
  display: flex;
  justify-content: space-between;

  font-size: 1.2vw;
  font-weight: 700;

  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border: 1px solid #AAAAAA;
  border-radius: 14px;

  cursor: pointer;
`;

const PoomFormItem = ({form}) => {
    const {vote_id, expired_statue, address, detail_address} = form;

    return (
        <>
            {
                expired_statue !== 'CLOSED' ? (
                    <PoomFormItemBlock onClick={() => window.open(`http://localhost:3000/realvote/${vote_id}`)}>
                        <div>
                            {address} {detail_address}
                        </div>
                        <div style={{marginTop: '0.2vw', fontSize: '1vw', fontWeight: '700'}}>
                            투표하기 >
                        </div>
                    </PoomFormItemBlock>
                ) : (
                    <PoomFormItemBlock style={{cursor: 'default', backgroundColor: 'rgba(0, 0, 0, 0.07)'}}>
                        <div>
                            {address} {detail_address}
                        </div>
                        <div style={{marginTop: '0.2vw', fontSize: '1vw', fontWeight: '700'}}>
                            [ 투표 종료 ]
                        </div>
                    </PoomFormItemBlock>
                )
            }

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
                    {forms.data.voting_vote_list.map(form => (
                        <PoomFormItem form={form} key={form.vote_id}/>
                    ))}
                </div>
            )}
        </div>
    );
};

export default PoomFormList;
