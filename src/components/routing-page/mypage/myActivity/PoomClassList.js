import React, {useState} from 'react';
import styled from 'styled-components';
import {BsTriangleFill} from "react-icons/bs";
import StyledTableRow from "../../../common/StyledTableRow";
import RectButton from "../../../common/RectButton";
import {NoListGrayComment} from "../../../common/NoListComment";

const PoomClassListTemplate = styled.div`
  margin: 1vw 0 6vw;
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

const PoomClassMoreInfo = ({group}) => {
    const {participating_members, apply_info} = group;

    return (
        <div style={{margin: '1vw 0 0'}}>
            <StyledTableRow header={'참여자 목록'}>{
                participating_members.length === 0 ? (
                    <div>참여자 없음</div>
                ) : (
                    participating_members
                )
            }</StyledTableRow>

            <StyledTableRow header={'모집 지원자 목록'}>{
                apply_info.length === 0 ? (
                    <div>지원자 없음</div>
                ) : (
                    apply_info
                )
            }</StyledTableRow>
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
            <div style={{width: '100%'}}>
                <PoomClassHeader>
                    <div>
                        {group_name}
                        {participation_type === 'MANAGE' &&
                        <span style={{margin: '0 0.7vw', fontSize: '0.9vw'}}>운영중</span>}
                    </div>
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
            {!loading && list && (
                list.data.group_info.length === 0
                    ? <NoListGrayComment>참여중인 품앗이 반이 없습니다.</NoListGrayComment>
                    : <div>
                        {
                            list.data.group_info.map(group => (
                                <PoomClassItem group={group} key={group.group_id}/>
                            ))
                        }
                    </div>
            )
            }
        </PoomClassListTemplate>
    );
};

export default PoomClassList;
