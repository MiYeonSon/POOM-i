import React from 'react';
import styled from "styled-components";
import {ContentHeader} from "../../../common/StyledHeader";
import { BsPencilSquare } from "react-icons/bs";
import InfoFormBlock from "../../register/InfoFormBlock";

const HeaderBlock = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  
  border: 1px solid red;

`;

const UserInfoTableContentTemplate = styled.div`
  box-sizing: border-box;
  margin: 5vw 0;
  padding: 2vw 4vw;
  
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border: 1px solid #AAAAAA;
  border-radius: 14px;
`;

const UserInfoTableTemplate = styled.div`
  box-sizing: border-box;

  
  border: 1px solid red;
`;

const UserInfoBlock = styled.div`
`;


const UserInfoTable = () => {
    return (
        <UserInfoTableContentTemplate>
            <HeaderBlock>
                <ContentHeader style={{margin: '0 0.5vw 0 0'}}>
                    계정 정보
                </ContentHeader>
                <BsPencilSquare size={'2vw'} color={'#AAAAAA'} />
            </HeaderBlock>


            <UserInfoTableTemplate>
                <InfoFormBlock title={'이메일'} padding={'5vw 0'}>aldusehd@naver.com</InfoFormBlock>
                <InfoFormBlock title={'비밀번호'}>*************</InfoFormBlock>
                <InfoFormBlock title={'이름'}>손미연</InfoFormBlock>
                <InfoFormBlock title={'성별'}>여자</InfoFormBlock>
                <InfoFormBlock title={'휴대전화'}>010-1234-5678</InfoFormBlock>
                <InfoFormBlock title={'주소'}>대전 동구 가양동 705</InfoFormBlock>
            </UserInfoTableTemplate>
        </UserInfoTableContentTemplate>
    );
};

export default UserInfoTable;
