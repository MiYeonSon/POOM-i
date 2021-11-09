import React, {useState} from 'react';
import styled from 'styled-components';
import {BsTriangleFill} from "react-icons/bs";
import StyledTableRow from "../../../common/StyledTableRow";

const PoomClassListTemplate = styled.div`
  margin: 1vw 0 6vw;
  width: 100%;
`;

const PoomClassBlock = styled.div`
  box-sizing: border-box;
  margin: 0 0 1.5vw;
  padding: 2vw 3vw;
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
  font-size: 1.5vw;
  font-weight: 700;
`;

const PoomClassMoreInfo = ({group}) => {
    const {participating_members, apply_info} = group;

    return (
        <div style={{margin: '1vw 0 0'}}>
            <StyledTableRow header={'참여자 목록'}>{
                participating_members.length === 0 ? (
                        <div>참여자 없음</div>
                    ) :  (
                        participating_members
                    )
            }</StyledTableRow>

            <StyledTableRow header={'모집 지원자 목록'}>{
                apply_info.length === 0 ? (
                    <div>지원자 없음</div>
                ) :  (
                    apply_info
                )
            }</StyledTableRow>
        </div>
    );
}

const PoomClassItem = ({group}) => {
    const {group_name, activity_time, participation_type} = group;
    const [click, setClick] = useState(false);

    return (
        <PoomClassBlock onClick={() => setClick(!click)}>
            <BsTriangleFill className={click ? 'rotate' : 'nonRotate'} color={'#AAAAAA'} size={'1vw'} style={{margin: '1vw 2vw 0 0'}}/>
            <div style={{width : '100%'}}>
                <PoomClassHeader>
                    {group_name}
                    {participation_type === 'MANAGE' && <span style={{margin : '0 0.7vw', fontSize : '0.9vw' }}>운영중</span>}
                </PoomClassHeader>
                <div>
                    <span style={{fontWeight : '300'}}>활동 시간 : {activity_time} </span>

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
                <div>
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
