import React from 'react';
import ContentHeader from "../../common/styledHeader/ContentHeader";
import Introduction from "../../common/Introduction";

import styled from 'styled-components';
import Map from "./Map";



const QuestionBlock = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: fit-content;
  
  border: 1px solid red;

`;



const RegisterPlaceStep1 = () => {


    return (
        <>
            <ContentHeader>품앗이 터 등록하기_Step 01</ContentHeader>
            <Introduction>
                지도와 현재 거주중인 건물을 확인하고 거주 사실을 인증합니다.
            </Introduction>

            <QuestionBlock>
                <p>1-1</p>
                <p>지도 상의 주소와 현재 거주중인 주소지가 맞는지 확인합니다.
                    만약 다른 경우, 마이페이지에서 거주지 변경 및 인증해주세요.
                    (이 경우, 관리자의 거주지 인증 승인 후에 품앗이 터 폼을 만들 수 있습니다.)
                </p>


            </QuestionBlock>

            <Map />

            <div>
                <p>1-2</p>
                <p>
                    거주지 인증을 실시합니다. 3개월 이내에 정부 24에서 발급받은 서류를 업로드해주세요.
                    (해당 폼은 관리자의 거주지 인증 승인을 거친 후 배포할 수 있으며, 승인은 최소 12시간 ~ 최대 48시간이
                    소요됩니다.)
                </p>
                <input type="file" />
            </div>

        </>
    );
};

export default RegisterPlaceStep1;
