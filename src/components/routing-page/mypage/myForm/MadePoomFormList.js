import React, {useState} from 'react';
import styled from 'styled-components';
import {BsTriangleFill} from "react-icons/bs";
import {ContentSmallHeader} from "../../../common/layout/StyledHeader";
import DoughnutChart from "./DoughnutChart";
import BarChart from "./BarChart";
import {useSelector} from "react-redux";
import {NoListGrayComment} from "../../../common/NoListComment";
import {StyledSelect} from "../../../common/styling/StyledInput";

const PoomFormItemBlock = styled.div`
  box-sizing: border-box;
  margin: 1vw 0;
  padding: 2vw 2vw;
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

const PoomFormHeader = styled.div`
  box-sizing: border-box;
  width: 90%;
  font-size: 1.2vw;
  font-weight: 700;
  
  cursor : pointer;
`;

const PoomFormMoreTemplate = styled.div`
  box-sizing: border-box;
  width: 92%;
  margin: 2vw 0 1vw;
`;

const ChartBlock = styled.div`
  box-sizing: border-box;
  width: 100%;
  border: 1px solid orange;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ListBlock = styled.div`
  box-sizing: border-box;
  width: 85%;
  margin: 0.5vw 1vw;
`;

const ListContent = styled.div`
  box-sizing: border-box;
  width: 100%;
  margin: 1vw 0;
  div{
    box-sizing: border-box;
    margin: 0.9vw 0;
    width: fit-content;
    
    font-size: 1vw;
  }
`;

const PoomFormMoreItem = ({form}) => {
    const {voting_rate, agree_rate, disagree_rate, detail_address, voting_yet_list} = form;

    const keys = Object.keys(voting_yet_list).sort();

    const [selectDong, setSelectDong] = useState(keys[0]);

    return (
        <PoomFormMoreTemplate>
            <ContentSmallHeader>
                * {`${detail_address}`}의 품앗이 터 활용 투표 현황
            </ContentSmallHeader>
            <ChartBlock>
                <DoughnutChart voteRate={voting_rate}/>
                <BarChart agree={agree_rate} disagree={disagree_rate}/>
            </ChartBlock>


            <ContentSmallHeader>
                * 미투표자 명단
            </ContentSmallHeader>
            <ListBlock>
                <StyledSelect onChange={e => setSelectDong(e.target.value)}>
                    {
                        keys.map(dong => (
                            <option value={dong} key={dong}>{dong}</option>
                        ))
                    }
                </StyledSelect>

                <ListContent>
                    {voting_yet_list[selectDong].map(ho => (
                        <div key={ho}>- {ho}</div>
                    ))}
                </ListContent>

            </ListBlock>
        </PoomFormMoreTemplate>

    );
};


const PoomFormItem = ({form}) => {
    const {address, detail_address} = form;

    const [click, setClick] = useState(false);

    return (
        <PoomFormItemBlock>
            <BsTriangleFill className={click ? 'rotate' : 'nonRotate'} color={'#AAAAAA'} size={'1vw'}/>

            <div style={{width: '89%', margin: '0 0 0 2vw'}} >
                <PoomFormHeader onClick={() => setClick(!click)}>{`${address} ${detail_address}`}</PoomFormHeader>
                {click && <PoomFormMoreItem form={form}/>}
            </div>
        </PoomFormItemBlock>
    );
}


const MadePoomFormList = ({forms, loading, error}) => {

    const {user} = useSelector(({user}) => ({
        user: user.userInfo.nick
    }));

    if (error) {
        return <div>에러 발생</div>
    }

    return (
        <div>
            {!loading && forms && (
                forms.data.member_register_vote_list.length === 0 ? (
                    <NoListGrayComment>등록된 품앗이 터 폼이 없습니다.</NoListGrayComment>
                ) : (
                    forms.data.member_register_vote_list.map(form => (
                            form.registrant === user && (
                                <PoomFormItem form={form} key={form.vote_id}/>
                            )
                        )
                    )
                )
            )
            }
        </div>
    );
};

export default MadePoomFormList;
