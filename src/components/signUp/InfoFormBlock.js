import React, {useState} from 'react';
import styled, {css} from "styled-components";
import InfoHr from "./InfoHr";
import axios from "axios";

/* 크기 지정 */
const sizeStyles = css`
  ${props =>
          props.size === 'default' &&
          css`
            width: 5vw;
            height: 4vh;
          `}

  ${props =>
          props.size === 'horizonSmall' &&
          css`
            width: 5vw;
            height: 4vh;
          `}
`;

const StyledInfoFormBlock = styled.div`
  box-sizing: border-box;
  width: 55vw;
  height: 8vh;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
`;

const InfoTitle = styled.div`
  box-sizing: border-box;
  width: 12vw;
  height: 7.2vh;
  margin: 0;
  padding: 1.3vw;
  text-align: center;
  font-size: 1vw;
  font-weight: 400;
  background: rgba(255, 182, 99, 0.3);
`;

const InputBlock = styled.div`
  box-sizing: border-box;
  width: 43vw;
  height: 9vh;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const StyledInput = styled.input`
  box-sizing: border-box;
  display: inline-block;
  width: 20vw;
  height: 3.5vh;
  margin: 0 0.5vw;
  padding: 0;
  ${sizeStyles};
  border: 0.01vw solid #DEDEDE;

  ${props =>
          props.inputType === "none" &&
          css`
            display: none;
          `};
`;

const RoundButton = styled.button`

  box-sizing: border-box;
  width: 7vw;
  height: 3vh;
  font-size: 0.7vw;
  font-weight: 700;
  color: #8E8E8E;
  border-radius: 100vw;
  background: #DEDEDE;
  border: none;
  cursor: pointer;

`;


const Guide = styled.div`
  display: block;
  width: 30vw;
  height: fit-content;
  margin: 0 0.5vw;
  padding: 0;
  font-size: 0.65vw;
`;

const FileLabel = styled.label`
  display: none;

  ${props =>
          props.FileButton &&
          css`
            box-sizing: border-box;
            display: block;
            width: 5.5vw;
            height: 3vh;
            margin: 0 1vw;
            padding: 0.35vw;

            font-size: 0.7vw;
            font-weight: 700;
            color: #8E8E8E;

            text-align: center;
            border-radius: 0.3vw;
            background: #DEDEDE;
            cursor: pointer;
          `};
`;


const InfoFormBlock = (props) => {
    let URL = 'http://poom-i.kro.kr:8081/api/sms-certification/send';
    const [info, setInfo] = useState('');


    const onChange = (e) => {
        setInfo(e.target.value);
        console.log(e.target.value);
    }

    const onClick = () => {

        const dataType = props.dataName;

        let data = {
            [ dataType + ''] : info
        }

        data = JSON.stringify(data);

        console.log(data);

        axios.post('http://192.168.10.233:8081/api/sms-certification/send', data, {
            headers: {
                "Content-Type": `application/json`,
            },
        }).then(response => {
            console.log(response.data);
        })
    }

    return (
        <StyledInfoFormBlock>
            <InfoTitle>{props.title}</InfoTitle>
            <InputBlock>
                <InfoHr/>
                <StyledInput defaultValue={info} onChange={onChange}/>

                {props.roundButton === "none" ? null : <RoundButton onClick={onClick}>{props.roundButton}</RoundButton>}
                <FileLabel {...props}>
                    파일 올리기
                    <input type={"file"} style={{visibility: "hidden"}}/>
                </FileLabel>

                <InfoHr/>
            </InputBlock>

        </StyledInfoFormBlock>
    );
};

export default InfoFormBlock;
