import React, {useState} from 'react';
import styled from 'styled-components';
import {BsTriangleFill} from "react-icons/bs";
import {ContentSmallHeader} from "../../../common/layout/StyledHeader";
import DoughnutChart from "./DoughnutChart";
import BarChart from "./BarChart";
import {useSelector} from "react-redux";
import {NoListGrayComment} from "../../../common/NoListComment";

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
  font-size: 1.2vw;
  font-weight: 700;
`;

const PoomFormMoreTemplate = styled.div`
  box-sizing: border-box;
  width: 92%;
  margin: 2vw 0 1vw;
  border: 1px solid red;
`;

const ChartBlock = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PoomFormMoreItem = ({form}) => {
    const {voting_rate, agree_rate, disagree_rate, detail_address} = form;

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
        </PoomFormMoreTemplate>

    );
};


const PoomFormItem = ({form}) => {
    const {address, detail_address} = form;

    const [click, setClick] = useState(false);

    return (
        <PoomFormItemBlock onClick={() => setClick(!click)}>
            <BsTriangleFill className={click ? 'rotate' : 'nonRotate'} color={'#AAAAAA'} size={'1vw'}/>

            <div style={{width: '100%', margin: '0 2vw'}}>
                <PoomFormHeader>{`${address} ${detail_address}`}</PoomFormHeader>
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
                <div>
                    {forms.data.map(form => (
                        form.registrant === user ? (
                                <PoomFormItem form={form} key={form.vote_id}/>
                            ) : (
                                <NoListGrayComment>제작한 품앗이 터 등록 폼이 없습니다.</NoListGrayComment>
                            )
                    ))}
                </div>
            )}
        </div>
    );
};

export default MadePoomFormList;
