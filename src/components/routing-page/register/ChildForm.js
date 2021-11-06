import React from 'react';
import styled from "styled-components";
import InfoHr from "./InfoHr";

const StyledChildForm = styled.div`
  box-sizing: border-box;
  width: 55vw;
  height: fit-content;
  margin: 0.5vw 0;
  
`;

const ChildNum = styled.div`
  box-sizing: border-box;
  width: 12vw;
  height: 35vh;
  margin: 0;
  padding: 8vw 0;
  display: inline-block;
  float: left;
  text-align: center;
  font-size: 1vw;
  font-weight: 400;
  background: rgba(255, 182, 99, 0.3);
`;

const ChildInputArea = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-content: space-between;
  margin: 0;
  width: 40vw;
  height: 40vh;
  color: #707070;
  font-size: 0.9vw;
  font-weight: 400;
`;

const ChildInputBlock = styled.div`
  box-sizing: border-box;
  margin: 0.25vw 1vw;
  width: 40vw;
  height: fit-content;
  color: #707070;
  font-size: 0.9vw;
  font-weight: 400;
`;

const StyledInput = styled.input`
  box-sizing: border-box;
  width: 20vw;
  height: 3.5vh;
  margin: 0.5vw 0.5vw;
  padding: 0;
  border: 0.01vw solid #DEDEDE;
`;

const StyledTextArea = styled.textarea`
  box-sizing: border-box;
  display: block;
  width: 35vw;
  height: 10vh;
  margin: 0.5vw;
  color: #5A5A5A;
  
  &::placeholder{
    padding: 0.5vw;
    font-family: 'LotteMartDream';
    font-size: 0.7vw;
    color: #AAAAAA;
  }
  
`;

const ChildForm = () => {

    return (
        <StyledChildForm>
            <ChildNum>자녀 1</ChildNum>
            <ChildInputArea>
                <InfoHr />
                <ChildInputBlock>
                    * 이름
                    <StyledInput type={"text"}/>
                </ChildInputBlock>
                <ChildInputBlock>
                    * 생년월일
                    <StyledInput type={"date"}/>
                </ChildInputBlock>
                <ChildInputBlock>
                    * 학교 정보
                    <StyledInput type={"text"} />
                </ChildInputBlock>
                <ChildInputBlock>
                    * 특이 사항
                    <StyledTextArea maxLength={4}
                              placeholder={"알러지 등 도움을 줄 품앗이 꾼이 꼭 알아야 할 내용을 입력해주세요.."}/>
                </ChildInputBlock>
                <InfoHr />
            </ChildInputArea>
        </StyledChildForm>
    );
};

export default ChildForm;
