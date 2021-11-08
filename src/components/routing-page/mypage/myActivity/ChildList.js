import React, {useState} from 'react';
import styled from 'styled-components';
import {BsTriangleFill} from "react-icons/bs";
import StyledTableRow from "../../../StyledTableRow";

const ChildListTemplate = styled.div`
  margin: 1vw 0;

  width: 100%;
`;

const ChildBlock = styled.div`
  box-sizing: border-box;
  padding: 2vw 3vw;
  width: 100%;
  display: flex;

  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border: 1px solid #AAAAAA;
  border-radius: 14px;
`;

const ChildHeader = styled.div`
  margin-bottom: 0.6vw;
  font-size: 1.5vw;
  font-weight: 700;
`;


// TODO : 진행 중인 품앗이 화면 출력
const ChildMoreItem = ({child}) => {
    const {school, special_note} = child;

    
    return (
        <div style={{margin : '1vw 0 0'}}>
            <StyledTableRow header={'학교'}>{school}</StyledTableRow>
            <StyledTableRow header={'특이 사항'}>
                {special_note === null
                    ? <div>없음</div>
                    : {special_note}
                }
            </StyledTableRow>
            <StyledTableRow header={'진행 중인 품앗이'}>
                없음
            </StyledTableRow>
        </div>
    );
}

const ChildItem = ({child}) => {
    const {birthday, child_name} = child;
    const [click, setClick] = useState(true);

    const handleClick = () => {

    }

    return (
        <ChildBlock onClick={() => setClick(!click)}>
            <BsTriangleFill color={'#AAAAAA'} size={'1vw'} style={{margin: '1vw 2vw 0 0'}}/>
            <div style={{width : '100%'}}>
                <ChildHeader>{child_name} (여)</ChildHeader>
                <div>생년월일 : {birthday}</div>
                {click && <ChildMoreItem child={child}/>}
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
