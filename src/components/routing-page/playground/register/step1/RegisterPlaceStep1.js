import React, {useState} from 'react';
import Introduction from "../../../../common/layout/Introduction";
import styled from 'styled-components';
import Map from "./Map";
import ContentTemplate from "../../../../common/layout/ContentTemplate";
import {ContentHeader} from "../../../../common/layout/StyledHeader";
import ContainerSubmitFile from "../../../../../containers/common/ContainerSubmitFile";
import ContainerSubmitActionButton from "../../../../../containers/common/ConatinerSubmitActionButton";
import client from "../../../../../lib/api/client";
import {useSelector} from "react-redux";

const QuestionBlock = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: fit-content;

  display: flex;
  justify-content: space-between;

  font-size: 1vw;
  line-height: 1.4vw;
`;

const QuestionNum = styled.div`
  box-sizing: border-box;
  width: 5%;
  height: inherit;
`;

export const QuestionContent = styled.div`
  box-sizing: border-box;
  width: 95%;
  height: inherit;

`;


const AdditionalTemplate = styled.div`
  box-sizing: border-box;
  margin: 1vw 2.5vw 2vw;
`;

const AdditionalBlock = styled.div`
  box-sizing: border-box;
  width: 100%;
  margin: 1vw 0;
  
  font-weight: 300;
  font-size: 1vw;
  line-height: 1.5vw;
  
  label {
    font-size: 0.9vw;
    margin: 0.5vw;
  }
`;


const RegisterPlaceStep1 = () => {
    const [checkMap, setCheckMap] = useState(null);
    const [checkAddr, setCheckAddr] = useState(null);

    const checkFact = () => {
        if (checkMap && checkAddr) {
            return true;
        }
        else {
            alert('마이페이지에서 주소 정보를 갱신 후 다시 시도해주세요.')
            return false;
        }
    };

    return (
        <>
            <ContentHeader>품앗이 터 등록하기_Step 01</ContentHeader>
            <Introduction>
                지도와 현재 거주중인 건물을 확인하고 거주 사실을 인증합니다.
            </Introduction>

            <ContentTemplate style={{fontWeight : 'bold'}}>
                <QuestionBlock>
                    <QuestionNum>1-1</QuestionNum>
                    <QuestionContent>지도 상의 주소와 현재 거주중인 주소지가 맞는지 확인합니다. <br/>
                        만약 다른 경우, 마이페이지에서 거주지 변경 및 인증해주세요. <br/>
                        (이 경우, 관리자의 거주지 인증 승인 후에 품앗이 터 폼을 만들 수 있습니다.)
                    </QuestionContent>
                </QuestionBlock>

                <AdditionalTemplate>
                    <Map/>

                    <AdditionalBlock>
                        <QuestionContent style={{fontWeight : '400'}}>* 현재 거주 중인 건물과 지도와 일치합니까?</QuestionContent>
                        <label><input type="radio" name={'mapMatching'} onClick={() => setCheckMap(true)} />예, 일치합니다.</label>
                        <label><input type="radio"  name={'mapMatching'} onClick={() => setCheckMap(false)} />아니요, 일치하지 않습니다</label>
                    </AdditionalBlock>

                    <AdditionalBlock>
                        <QuestionContent style={{fontWeight : '400'}}>* 아래의 주소지와 건물의 주소가 일치합니까?</QuestionContent>
                        <label><input type="radio" name={'addressMatcing'} onClick={() => setCheckAddr(true)}/>예, 일치합니다.</label>
                        <label><input type="radio" name={'addressMatcing'} onClick={() => setCheckAddr(false)}/>아니요, 일치하지 않습니다</label>
                    </AdditionalBlock>
                </AdditionalTemplate>


                <QuestionBlock>
                    <QuestionNum>1-2</QuestionNum>
                    <QuestionContent>
                        거주지 인증을 실시합니다. 3개월 이내에 정부 24에서 발급받은 서류를 업로드해주세요. <br/>
                        (해당 폼은 관리자의 거주지 인증 승인을 거친 후 배포할 수 있으며, 승인은 최소 12시간 ~ 최대 48시간이
                        소요됩니다.)
                        <ContainerSubmitFile />
                        <ContainerSubmitActionButton />
                    </QuestionContent>
                </QuestionBlock>
            </ContentTemplate>
        </>
    );
};

export default RegisterPlaceStep1;
