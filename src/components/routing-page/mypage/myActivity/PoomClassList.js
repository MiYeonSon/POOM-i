import React, {useState} from 'react';
import styled from 'styled-components';
import {BsFillPersonFill, BsTriangleFill} from "react-icons/bs";
import RectButton from "../../../common/RectButton";
import {NoListGrayComment} from "../../../common/NoListComment";
import {ContentSmallHeader} from "../../../common/layout/StyledHeader";
import {useSelector} from "react-redux";
import {approveClass} from "../../../../lib/api/mypage/actionPoomClass";
import PoomClassEditButton from "./PoomClassEditButton";

const PoomClassListTemplate = styled.div`
  margin: 0 0 6vw;
  width: 100%;
`;

const PoomClassBlock = styled.div`
  box-sizing: border-box;
  margin: 0 0 1.5vw;
  padding: 1.5vw 3vw;
  width: 100%;
  display: flex;

  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border: 1px solid #AAAAAA;
  border-radius: 14px;

  .nonRotate {
    transform: rotate(0);
  }

  .rotate {
    transform: rotate(180deg);
  }
`;

const PoomClassHeader = styled.div`
  margin-bottom: 0.6vw;

  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 1.2vw;
  font-weight: 700;
`;

const PoomClassHeaderMain = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

`;

const UserInfoBlock = styled.div`
  box-sizing: border-box;
  width: 100%;

  margin: 1vw 0;
  padding: 1.5vw 2vw 1vw;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border: 1px solid #AAAAAA;
  border-radius: 7px;
`;

const UserInfo = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
`;

const UserTextInfo = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: space-between;

  div {
    margin: 0 0.3vw;
  }
`;

const ApplyAmbition = styled.div`
  box-sizing: border-box;

  margin: 0 0 0 2.7vw;
`;

const ApplierInfo = ({groupId, applier}) => {
    const {apply_id, apply_contents, applier_nick, child_name, child_birthday} = applier;

    const {token} = useSelector(({user}) => ({
        token: user.token
    }));

    const onApply = () => {
        approveClass({token, groupId, applyId: apply_id}).then(r => {
            window.location.reload();
        });
    }


    return (
        <UserInfoBlock>

            <UserInfo>
                <div>
                    <BsFillPersonFill size={40} color={'#8E8E8E'} style={{
                        padding: '0.1vw',
                        boxSizing: 'border-box',
                        border: '1.5px solid #8E8E8E',
                        borderRadius: '100%'
                    }}/>
                </div>
                <UserTextInfo>
                    <div>
                        <div style={{fontSize: '1.1vw', fontWeight: '700'}}>{applier_nick}</div>
                        <div style={{marginTop: '0.1vw', fontSize: '0.8vw'}}>자녀 정보 : {child_name} (생년월일
                            : {child_birthday})
                        </div>
                    </div>

                    <RectButton margin={'0'} backgroundColor={'#FFB663'}
                                onClick={onApply}>승인하기</RectButton>
                </UserTextInfo>
            </UserInfo>

            <ApplyAmbition dangerouslySetInnerHTML={{__html: apply_contents}}/>
        </UserInfoBlock>
    );
}

const ParticipantInfo = ({participant}) => {
    const {member_nick, child_name, child_birthday} = participant;

    return (
        <>
            <UserInfoBlock>
                <UserInfo>
                    <div>
                        <BsFillPersonFill size={40} color={'#8E8E8E'} style={{
                            padding: '0.1vw',
                            boxSizing: 'border-box',
                            border: '1.5px solid #8E8E8E',
                            borderRadius: '100%'
                        }}/>

                    </div>
                    <UserTextInfo>
                        <div>
                            <div style={{fontSize: '1.1vw', fontWeight: '700'}}>{member_nick}</div>
                            <div style={{marginTop: '0.1vw', fontSize: '0.8vw'}}>
                                자녀 정보 : {child_name} (생년월일 : {child_birthday})
                            </div>
                        </div>
                    </UserTextInfo>
                </UserInfo>
            </UserInfoBlock>
        </>
    );
}

const PoomClassMoreInfo = ({group}) => {
    const {group_id, participating_members, apply_info, participation_type} = group;

    return (
        <div style={{margin: '1vw 0 0'}}>
            <ContentSmallHeader>[ 참여자 목록 ]</ContentSmallHeader>
            {
                participating_members.length === 0 ? (
                    <NoListGrayComment>참여자 없음</NoListGrayComment>
                ) : (
                    participating_members.map(participant => (
                        <ParticipantInfo participant={participant} key={participant.member_id}/>
                    ))
                )
            }

            {
                participation_type === 'MANAGE' && (
                    <div style={{marginTop: '2vw'}}>
                        <ContentSmallHeader>[ 참여자 희망자 목록 ]</ContentSmallHeader>
                        {
                            apply_info.length === 0 ? (
                                <NoListGrayComment>지원자 없음</NoListGrayComment>
                            ) : (
                                apply_info.map(applier => (
                                    <ApplierInfo groupId={group_id} applier={applier} key={applier.apply_id}/>
                                ))
                            )
                        }
                    </div>
                )
            }
        </div>
    );
}

const PoomClassItem = ({group}) => {
    const {group_name, activity_time, participation_type, recruitment_status} = group;
    const [click, setClick] = useState(false);


    return (
        <PoomClassBlock onClick={() => setClick(!click)}>
            <BsTriangleFill className={click ? 'rotate' : 'nonRotate'} color={'#AAAAAA'} size={'1vw'}
                            style={{margin: '1vw 2vw 0 0'}}/>
            <div style={{width: '90%'}}>
                <PoomClassHeader>
                    <PoomClassHeaderMain>
                        {group_name}
                        {
                            participation_type === 'MANAGE' && (
                                <>
                                    <span style={{margin: '0 0.2vw 0 0.7vw', fontSize: '0.9vw'}}>운영중</span>
                                    <PoomClassEditButton group={group}/>
                                </>
                            )
                        }
                    </PoomClassHeaderMain>


                    {recruitment_status === 'RECRUITING' && <RectButton backgroundColor={'#FFB663'}>모집중</RectButton>}
                </PoomClassHeader>
                <div>
                    <span style={{fontWeight: '300'}}>활동 시간 : {activity_time} </span>
                    {click && <PoomClassMoreInfo group={group}/>}
                </div>
            </div>
        </PoomClassBlock>
    );
}

const PoomClassList = ({list, loading, error}) => {
    if (error) {
        return <div>에러 발생</div>
    }

    return (
        <PoomClassListTemplate>
            {

                !loading && list && (
                    list.data.group_info.length === 0 ? (
                        <NoListGrayComment>참여 중인 품앗이 반이 없습니다.</NoListGrayComment>
                    ) : (
                        list.data.group_info.map(group => (
                            <PoomClassItem group={group} key={group.group_id}/>
                        ))
                    )
                )
            }
        </PoomClassListTemplate>
    );
};

export default PoomClassList;
