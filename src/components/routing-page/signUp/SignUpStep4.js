import React from 'react';
import styled from "styled-components";
import SignUpBlock from "./SignUpBlock";
import welcomeImg from "./assets/welcomeImg.png";


const WelcomeImg = styled.img`
  box-sizing: border-box;
  display: block;
  margin: 0vw auto;
  padding: 0vw;
  width: 40vw;
  height: fit-content;
`;

const TextArea = styled.div`
  box-sizing: border-box;
  margin: 3vw auto;
  width: 40vw;
  font-size: 1vw;
  font-weight: 300;
  line-height: 1.6vw;
`;

const SignUpStep4 = () => {
    return (
        <SignUpBlock>
            <WelcomeImg src={welcomeImg} />
            <TextArea>
                회원가입이 완료되었습니다.<br/>
                가입 승인은 품아이 가족분들의 안전을 위해 거주지 정보의 사실 여부 판단 후(최대 48시간)<br/> 승인 절차가 이루어질 예정입니다.<br/>
                승인 여부를 입력하신 메일로 전송해드리니 확인 바랍니다.
                <br />
                <br />
                가입해주셔서 감사합니다.
            </TextArea>
        </SignUpBlock>
    );
};

export default SignUpStep4;
