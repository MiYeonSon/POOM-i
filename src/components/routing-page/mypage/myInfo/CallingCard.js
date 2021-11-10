import React from 'react';
import styled from 'styled-components';
import ProfileImg from '../../../common/assets/005-gardener.png';
import {ProfileImage} from "../../../common/post/WriterInfo";
import {BsPencilSquare} from "react-icons/bs";

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

const UserInfoBlock = styled.div`
  box-sizing: border-box;
  width: fit-content;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const UserInfo = styled.div`
  box-sizing: border-box;
  margin: 0 1vw;
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
    const {name, child_count} = info;

    return(
        <>
            <UserInfoBlock>
                <ProfileImage size={4.5} src={ProfileImg} alt={'프로필 사진'}/>
                <UserInfo>
                    <div style={{
                        marginBottom: '0.5vw',
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <BoldElem style={{margin: '0 0.5vw 0 0'}}>{name}</BoldElem>
                        <BsPencilSquare size={'1.3vw'} color={'#AAAAAA'}/>
                    </div>

                    <div>품앗이 점수 : ❤❤❤❤❤❤</div>
                </UserInfo>
            </UserInfoBlock>


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
    };

    return (
        <>
            {!loading && info && (

                <CallingCardTemplate>
                    <CallingCardContent info={info.data} />
                </CallingCardTemplate>
            )}
        </>

    );
};

export default CallingCard;
