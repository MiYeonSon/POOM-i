import React, {useState} from 'react';
import styled from "styled-components";
import MainLogo from "../common/assets/mainLogo.png";
import ContentMiddleHeader from "../common/ContentMiddleHeader";
import {Link} from "react-router-dom";
import GoogleIcon from "./assets/googleOauth.png";
import FacebookIcon from "./assets/facebookOauth.png";
import KakaoIcon from "./assets/kakaoOauth.png";

const ShowingLogin = styled.div`
  .openModal {
    display: flex;
  }

  .closeModal {
    display: none;
  }
`;

const ModalLoginTemplate = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(222, 222, 222, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalLoginBlock = styled.div`
  box-sizing: border-box;
  width: 30vw;
  height: fit-content;
  background: white;
  border-radius: 3rem;
  padding: 1vw 0;

  .closeButton {
    box-sizing: border-box;
    width: fit-content;
    height: fit-content;
    margin: 1.5vw 2vw;
    float: right;
    font-family: 'LotteMartDream';
    font-size: 1.5vw;
    font-weight: 400;
    color: #707070;
    display: flex;
    justify-content: flex-end;
    background: none;
    border: none;
    cursor: pointer;
  }

`;

const ModalTitleBlock = styled.div`
  box-sizing: border-box;
  width: 30vw;
  margin: 0;
  flex: fit-content;
  display: flex;
  justify-content: center;

`;

const LoginInputBlock = styled.div`
  box-sizing: border-box;
  width: 30vw;
  height: fit-content;
  margin: 1vw 0;
  padding: 0 3vw;
`;

const InputBlock = styled.div`
  box-sizing: border-box;
  width: fit-content;
  height: fit-content;
  margin: 0.5vw 0;

`;
const GrayInput = styled.input`
  box-sizing: border-box;
  display: inline-block;
  width: 23vw;
  height: 5vh;
  margin: 0.3vw 0;
  border: none;
  border-radius: 0.5rem;

  background: #EEEEEE;

  &::placeholder {
    padding: 0.5vw;
    font-family: 'LotteMartDream';
    font-size: 1vw;
    color: #AAAAAA;
  }
`;

const LoginButton = styled.button`
  box-sizing: border-box;
  display: inline-block;
  width: 23vw;
  height: 5vh;
  margin: 0.3vw 0;
  color: white;
  font-size: 1vw;
  font-weight: 700;
  letter-spacing: 0.2vw;
  background: #FFB663;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  visibility: visible;
`;

const GoFindInfo = styled.div`
  box-sizing: border-box;
  width: 23vw;
  height: fit-content;
  text-align: right;
  font-family: 'LotteMartDream';
`;

const LoginOAuthBlock = styled.div`
  box-sizing: border-box;
  width: 30vw;
  height: fit-content;
  margin: 2vw 0;
  padding: 0 3vw;
`;

const LineTitle = styled.div`
  display: flex;
  flex-basis: 100%;
  align-items: center;
  color: #707070;
  font-family: 'LotteMartDream';
  font-size: 0.9vw;
  font-weight: 400;
  margin: 0.8vw;

  &::before,
  &::after {
    content: "";
    flex-grow: 1;
    background: #707070;
    height: 0.01vh;
    margin: 1vw;
`;

const OauthIconBlock = styled.div`
  box-sizing: border-box;
  width: 23vw;
  height: fit-content;
  margin: 0.5vw 0;
  padding: 0 6vw;
  display: flex;
  justify-content: space-between;

  img {
    width: 2.5vw;
    height: 5vh;
    cursor: pointer;
  }
`;

const GoToSignUpComponent = styled.div`
  box-sizing: border-box;
  width: 30vw;
  height: fit-content;
  margin: 2vw 0;
  font-size: 0.8vw;
  text-align: center;
  color: #707070;
  font-family: 'LotteMartDream';


  .highlight {
    font-size: 0.9vw;
    color: #FFB663;
    font-weight: 700;
  }
`;



// 모달 창 닫기 구현해야 함
const ModalLogin = () => {
    const [close, setClose] = useState(false);
    function onClose(){
        setClose(!close);
        return undefined;
    }
    return (
        <ShowingLogin className={close ? "closeModal" : "openModal"}>
            <ModalLoginTemplate>
                <ModalLoginBlock>
                    <button className={"closeButton"} onClick={onClose}>X</button>
                    <ModalTitleBlock>
                        <img className={"mainLogo"} src={MainLogo} alt={"로고창"}/>
                    </ModalTitleBlock>
                    <LoginInputBlock>
                        <ContentMiddleHeader>로그인</ContentMiddleHeader>
                        <InputBlock>
                            <GrayInput placeholder={"아이디"}/>
                            <GrayInput placeholder={"비밀번호"}/>
                            <LoginButton>로그인</LoginButton>
                        </InputBlock>
                        <GoFindInfo>
                            <Link to={"/"} style={{color: '#707070', textDecoration: 'none'}}>아이디/비밀번호 찾기</Link>
                        </GoFindInfo>
                    </LoginInputBlock>
                    <LoginOAuthBlock>
                        <LineTitle>소셜 계정으로 로그인 하기</LineTitle>
                        <OauthIconBlock>
                            <Link to={"/oauth2/authorization/google"}><img src={GoogleIcon} alt={"구글로 로그인"}/></Link>
                            <Link to={"/oauth2/authorization/facebook"}><img src={FacebookIcon} alt={"페이스북으로 로그인"}/></Link>
                            <Link to={"/oauth2/authorization/kakao"}><img src={KakaoIcon} alt={"카카오로 로그인"}/></Link>
                        </OauthIconBlock>
                    </LoginOAuthBlock>
                    <GoToSignUpComponent>
                        아직 회원이 아니신가요? &nbsp;
                        <span className={"highlight"}> <Link to={"/signUp"} style={{
                            color: '#FFB663',
                            textDecoration: 'none'
                        }}>회원 가입 하기</Link></span>
                    </GoToSignUpComponent>
                </ModalLoginBlock>
            </ModalLoginTemplate>
        </ShowingLogin>
    );
};

export default ModalLogin;
