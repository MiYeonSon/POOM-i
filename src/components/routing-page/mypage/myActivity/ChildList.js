import React, {useState} from 'react';
import styled from 'styled-components';
import {BsTriangleFill} from "react-icons/bs";
import StyledTableRow from "../../../common/StyledTableRow";
import RectButton from "../../../common/RectButton";
import {NoListGrayComment} from "../../../common/NoListComment";
import {BsFillPersonFill} from "react-icons/bs";

const ChildListTemplate = styled.div`
  margin: 1vw 0 6vw;
  width: 100%;
`;

const ChildBlock = styled.div`
  box-sizing: border-box;
  margin: 0 0 1vw;
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


const ChildHeader = styled.div`
  margin-bottom: 0.6vw;
  font-size: 1.2vw;
  font-weight: 700;
`;


const ActivityItemBlock = styled.div`
  box-sizing: border-box;
  width: 100%;
  margin: 0.5vw 0;
  padding: 1vw;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background: #FFFFFF 0% 0% no-repeat padding-box;
  border: 1px solid #DEDEDE;
  border-radius: 7px;
`;

const ActivityItemInfo = styled.div`
  box-sizing: border-box;
  width: available;
  
  display: flex;
  align-items: center;

  font-size: 0.9vw;

  div + div {
    margin-top: 0.3vw;
    font-size: 0.7vw;
  }

`;


const ActivityHeader = styled.div`
  font-size: 1vw;
`;


// TODO : 진행 중인 품앗이 화면 출력
const ChildMoreItem = ({child}) => {
    const {child_name, school, special_note, expert_info} = child;

    return (
        <div style={{margin: '1vw 0 0'}}>
            <StyledTableRow header={'학교'}>{school}</StyledTableRow>
            <StyledTableRow header={'특이 사항'}>
                {special_note === null
                    ? <div>없음</div>
                    : {special_note}
                }
            </StyledTableRow>
            <StyledTableRow header={'진행 중인 품앗이'}>


                <div style={{width: '100%', margin: '1.5vw 0'}}>
                    <ActivityHeader>[단기 품앗이]</ActivityHeader>

                    {expert_info === null ? (
                        <NoListGrayComment>참여중인 단기 품앗이 목록이 없습니다.</NoListGrayComment>
                    ) : (
                        <ActivityItemBlock>
                            <ActivityItemInfo>
                                <BsFillPersonFill size={40} color={'#8E8E8E'} style={{
                                    boxSizing : 'border-box',
                                    margin: '0 0.8vw 0 0',
                                    border: '1.5px solid gray',
                                    borderRadius: '100%'
                                }}/>

                                <div>
                                    <div>
                                        {expert_info.manager_nick} 님과 품앗이 진행 중
                                    </div>
                                    <div>
                                        예상 종료 시간 : {expert_info.end_time}
                                    </div>
                                </div>
                            </ActivityItemInfo>
                            <RectButton backgroundColor={'#FFB663'}>종료 및 평가</RectButton>
                        </ActivityItemBlock>
                    )}


                    <ActivityHeader style={{margin: '2vw 0 0'}}>[정기 품앗이]</ActivityHeader>
                    <ActivityItemBlock>

                    </ActivityItemBlock>

                </div>
            </StyledTableRow>
        </div>
    );
}

const ChildItem = ({child}) => {
    const {birthday, child_name, gender,} = child;
    const [click, setClick] = useState(false);

    const genderKo = gender === 'FEMALE' ? '여' : '남';

    return (
        <ChildBlock onClick={() => setClick(!click)}>
            <BsTriangleFill className={click ? 'rotate' : 'nonRotate'} color={'#AAAAAA'} size={'1vw'}
                            style={{margin: '1vw 2vw 0 0'}}/>

            <div style={{width: '100%'}}>
                <ChildHeader>{child_name} ({genderKo})</ChildHeader>
                <div>생년월일 : {birthday}</div>
                {click && <ChildMoreItem child={child} />}
            </div>
        </ChildBlock>
    )
}

const ChildList = ({list, loading, error}) => {
    if (error) {
        return <div>에러 발생</div>
    }

    return (
        <ChildListTemplate>
            {!loading && list && (
                <div>
                    {
                        list.data.child_info.map(child => (
                            <ChildItem child={child} key={child.child_id}/>
                        ))
                    }
                </div>
            )
            }
        </ChildListTemplate>
    );
};

export default ChildList;
