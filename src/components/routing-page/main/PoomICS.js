import React from "react";
import styled from "styled-components";
import Logo from "./assets/mainLogo.png";

const CSTemplate = styled.div`
  box-sizing: border-box;
  width: 70vw;
  height: 35vh;
  margin: 0 auto;
  padding: 0 6vw;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContactBlock = styled.div`
  box-sizing: border-box;
  width: 30vw;
  height: 20vh;
  margin: 0;
  padding: 1vw 0;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const ContactHeader = styled.div`
  box-sizing: border-box;
  width: 25vw;
  height: fit-content;
  font-weight: 700;
  font-size: 1.5vw;
  color: #4E7093;
`;

const ContactEmail = styled.div`
  box-sizing: border-box;
  width: 25vw;
  height: fit-content;
  margin-top: 0.5vw;
  padding: 0;

  letter-spacing: 0.1vw;
  font-size: 1.2vw;
`;

const ContactTime = styled.div`
  box-sizing: border-box;
  width: 25vw;
  height: fit-content;

  font-weight: lighter;
  font-size: 0.8vw;
  color: #707070;
`;

const VerticalLine = styled.div`
  margin: 0 2vw;
  height: 12rem;
  border: 0.01vw solid #DEDEDE;
`;

const MoreInfoLink = styled.div`
  box-sizing: border-box;
  width: 30vw;
  height: 20vh;

  display: flex;
  align-items: center;
  justify-content: center;
  
  img{
    height: 6vh;
    cursor: pointer;
  }
  
  button {

    box-sizing: border-box;
    width: fit-content;
    height: 8vh;
    padding-top: 1.5vw;
    
    font-weight: 700;
    font-size: 1vw;
    color: #4E7093;
    border: none;
    background: none;
    cursor: pointer;
  }
`;

const PoomICS = () => {
    return (
        <CSTemplate>
            <ContactBlock>
                <ContactHeader>[ 이용 문의 ]</ContactHeader>
                <ContactEmail>
                    20161715@edu.hanbat.ac.kr <br/>
                    20181710@edu.hanbat.ac.kr
                </ContactEmail>
                <ContactTime>
                    * 이용 시간 : 09:00 ~ 20:00 <br/>
                    * 주말∙공휴일 휴무
                </ContactTime>
            </ContactBlock>

            <VerticalLine />

            <MoreInfoLink>
                <img src={Logo} alt="logo"/>
                <button>더 알아보기 ></button>
            </MoreInfoLink>
        </CSTemplate>
    );
};

export default PoomICS;
