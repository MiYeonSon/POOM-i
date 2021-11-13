import React from 'react';
import styled from 'styled-components';
import HorizontalWriterInfo from "../../../common/user-info/HorizontalWriterInfo";

const CallingCardTemplate = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 2vw 4vw;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border: 1px solid #AAAAAA;
  border-radius: 14px;
`;


const ChildInfoBlock = styled.div`
  box-sizing: border-box;
  width: fit-content;

  text-align: center;
`;

const BoldElem = styled.div`
  font-size: 1.5vw;
  font-weight: 700;
`;

const CallingCardContent = ({info}) => {
    const {name, child_count, member_score} = info;


    return (
        <>
            <HorizontalWriterInfo user={name} review={member_score}/>

            <ChildInfoBlock>
                <div>등록된 자녀 수</div>
                <BoldElem style={{marginTop: '0.5vw'}}>{child_count}</BoldElem>
            </ChildInfoBlock>
        </>
    );
}

const CallingCard = ({info, error, loading}) => {
    if (error) {
        return <div>에러 발생</div>
    }
    ;

    return (
        <>
            {!loading && info && (

                <CallingCardTemplate>
                    <CallingCardContent info={info.data}/>
                </CallingCardTemplate>
            )}
        </>

    );
};

export default CallingCard;
