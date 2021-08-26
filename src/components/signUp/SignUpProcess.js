import React from 'react';
import styled from 'styled-components';

const SignUpProcessBlock = styled.div`
  box-sizing: border-box;
  width: 55vw;
  height: fit-content;
  margin: 1.5vw 0 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;


const ProcessElem = styled.div`
  box-sizing: border-box;
  width: 7vw;
  height: 14vh;
  padding-top: 3vw;
  display: inline-block;
  text-align: center;

  background: rgba(255, 182, 99, 0.2);
  border-radius: 100vw;
  font-size: 1vw;
  font-weight: 400;
  color: rgba(112, 112, 112, 0.7);
`;

const ArrowElem = styled.div`
  box-sizing: border-box;
  width: 10vw;
  height: 3vh;
  display: inline-block;

  text-align: center;
  font-weight: 700;
  font-size: 1.2vw;
  color: rgba(255, 182, 99, 0.6);
`;


const SignUpProcess = () => {
    return (
        <SignUpProcessBlock>
            <ProcessElem>1. 약관 동의</ProcessElem>
            <ArrowElem>- - - - - -▶</ArrowElem>

            <ProcessElem>2. 본인 인증</ProcessElem>
            <ArrowElem>- - - - - -▶</ArrowElem>

            <ProcessElem>3. 정보 입력</ProcessElem>
            <ArrowElem>- - - - - -▶</ArrowElem>

            <ProcessElem>4. 가입 완료</ProcessElem>
        </SignUpProcessBlock>
    );
};

export default SignUpProcess;