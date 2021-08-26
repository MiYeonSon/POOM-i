import React, {useState} from 'react';
import styled from "styled-components";

import ChildForm from "./ChildForm";
import SignUpBlock from "./SignUpBlock";
import ContentMiddleHeader from "../common/ContentMiddleHeader";
import ContentSmallHeader from "../common/ContentSmallHeader";
import InfoFormBlock from "./InfoFormBlock";

const InfoFormTemplate = styled.div`
  box-sizing: border-box;
  width: 55vw;
  height: fit-content;
  margin: 0;
  padding: 0;
`;

const AnnounceComponent = styled.div`
  box-sizing: border-box;
  width: 55vw;
  height: fit-content;
  margin: 0vw 1vw;
  font-size: 0.9vw;
  line-height: 1.1vw;
`;

const ChildButton = styled.button`
  box-sizing: border-box;
  width: 2vw;
  height: 4vh;
  margin: 0.3vw 0.1vw;
  padding: 0;
  font-size: 1.5vw;
  background: white;
  color: #8E8E8E;
  border: 0.01vw solid #AAAAAA;
  cursor: pointer;
`;

const SignUpStep3 = () => {
    const [childNum, setChildNum] = useState(1);


    return (
        <SignUpBlock>
            <ContentMiddleHeader>정보 입력</ContentMiddleHeader>
            <ContentSmallHeader>* 필수 정보 입력</ContentSmallHeader>
            <InfoFormTemplate>
                <InfoFormBlock title={"이름"} inputType={"text"} roundButton={"none"}/>
                <InfoFormBlock title={"아이디"} inputType={"text"} roundButton={"아이디중복확인"}/>
                <InfoFormBlock title={"비밀번호"} inputType={"password"} roundButton={"none"} />
                <InfoFormBlock title={"비밀번호 확인"} inputType={"password"} roundButton={"none"} />
                <InfoFormBlock title={"닉네임"} inputType={"text"} roundButton={"닉네임 중복 확인"} />
                <InfoFormBlock title={"휴대전화"} inputType={"password"} roundButton={"none"} />
                <InfoFormBlock title={"이메일"} inputType={"email"} roundButton={"none"} />
                <InfoFormBlock title={"주소"} inputType={"text"} roundButton={"none"} />
                <InfoFormBlock title={"주소 인증 문서 첨부"} inputType={"none"} roundButton={"none"} FileButton />
            </InfoFormTemplate>

            <ContentSmallHeader>* 자녀 정보 입력 (선택)</ContentSmallHeader>
            <AnnounceComponent>
                - 자녀 정보는 품앗이 반 활동 시 필수 입력사항으로, 미입력 시 품앗이 반 활동 등 서비스 이용에 제약이 있을 수 있습니다. <br/>
                - 자녀 정보 미입력 시 품앗이 꾼으로서의 활동은 가능합니다. <br/>
                - 자녀 정보는 가입 완료 후 가입에 대한 승인 이후 마이페이지에서도 입력 가능합니다.
            </AnnounceComponent>
            <InfoFormTemplate>
                <InfoFormBlock title={"자녀 유무"} inputType={"radio"} roundButton={"none"}/>
                <InfoFormBlock title={"가족 관계 증명서 첨부"} inputType={"none"} roundButton={"none"} FileButton />
                <ChildButton>+</ChildButton>
                <ChildButton>-</ChildButton>
                <ChildForm />
            </InfoFormTemplate>
        </SignUpBlock>
    );
};

export default SignUpStep3;