import React from 'react';
import styled from "styled-components";
import {ContentMiddleHeader} from "../../../common/layout/StyledHeader";
import {BsPencilSquare} from "react-icons/bs";
import StyledTableRow from "../../../common/StyledTableRow";

const HeaderBlock = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
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

const UserInfoTableRowContent = ({info}) => {
    const {email, name, gender, address, phone_number, address_expired_date} = info;

    return (
        <>
            <StyledTableRow header={'이메일'}>{email}</StyledTableRow>
            <StyledTableRow header={'비밀번호'}>********</StyledTableRow>
            <StyledTableRow header={'이름'}>{name}</StyledTableRow>
            <StyledTableRow header={'성별'}>{gender === 'FEMALE' ? '여자' : '남자'}</StyledTableRow>
            <StyledTableRow header={'휴대전화'}>{phone_number}</StyledTableRow>
            <StyledTableRow header={'주소'}>{address}</StyledTableRow>
            <StyledTableRow header={'주소지 인증 만료일'}>{address_expired_date}</StyledTableRow>
        </>

    );
}

const UserInfoTable = ({info, error, loading}) => {
    if (error) {
        return <div>에러 발생</div>
    };

    return (
        <>
            <UserInfoTableContentTemplate>
                <HeaderBlock>
                    <ContentMiddleHeader style={{margin: '0 0.5vw 0 0', color:'#4E7093'}}>
                        계정 정보
                    </ContentMiddleHeader>
                    <BsPencilSquare size={30} color={'#AAAAAA'}/>
                </HeaderBlock>

                {!loading && info && (
                    <div style={{margin : '1vw 0'}}>
                        <UserInfoTableRowContent info={info.data} />
                    </div>
                )}
            </UserInfoTableContentTemplate>
        </>

    );
};

export default UserInfoTable;
