import React from 'react';
import styled from 'styled-components';
import {useSelector} from "react-redux";
import client from "../../../../lib/api/client";
import {NoListGrayComment} from "../../../common/NoListComment";
import RectButton from "../../../common/RectButton";
import {FileLink} from "../../../common/mypage/StyledLink";

const MemberTemplate = styled.div`
  box-sizing: border-box;
  margin: 0 0 1vw;
  padding: 1.5vw 2.5vw;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border: 1px solid #AAAAAA;
  border-radius: 14px;
`;

const PersonalInfo = styled.div`
  box-sizing: border-box;
  width: 85%;
  margin: 0 1vw;
  font-size: 1vw;
  font-weight: 300;
  line-height: 1.6vw;
`;


const MemberInfo = ({member}) => {
    const {name, email, nick, gender, age, phone_number} = member.member_info;
    const {address, post_code, detail_address, extra_address, certification_info} = member.residence_info;

    const {token} = useSelector(({user}) => ({
        token: user.token
    }));

    const acceptMember = async () => {
        await client.patch(`admin/approve/residence`, {
            account: email
        }, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });

        await client.patch(`admin/approve/signup`, {
            account: email
        }, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
        window.location.reload();
    }

    return (
        <MemberTemplate>
            <PersonalInfo>
                * {name} ({gender === 'FEMALE' ? '여자' : '남자'}, {age}세) <br/>
                * 닉네임 : {nick} <br/>
                * 이메일 : {email} <br/>
                * 휴대전화 : {phone_number} <br/>


                * 주소 : {post_code} {address} {detail_address} {extra_address}

                <FileLink onClick={() => window.open(certification_info.residence_file_URL)}>
                    주소 인증 문서 확인하기 >
                </FileLink>
            </PersonalInfo>


            <RectButton width={'4vw'} backgroundColor={'#FFB663'} type={'button'}
                        onClick={acceptMember}>승인</RectButton>

        </MemberTemplate>
    )
};

const AcceptMemberInfo = ({members, error, loading}) => {
    if (error) {
        return <div>에러 발생</div>
    }

    return (
        <div>
            {!loading && members && (
                <div>
                    {members.data.length === 0 ? (
                        <NoListGrayComment>신규 가입한 회원이 없습니다.</NoListGrayComment>
                    ) : (
                        members.data.map(member => (
                            <MemberInfo member={member} key={member.member_info.id}/>
                        ))
                    )
                    }
                </div>
            )
            }
        </div>
    );
};

export default AcceptMemberInfo;
