import React, {useState} from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";
import GoogleIcon from "./assets/googleOauth.png";
import NaverIcon from "./assets/naverOauth.png";
import KakaoIcon from "./assets/kakaoOauth.png";
import {KAKAO_AUTH_URL} from './OauthKakao';
import ContainerLoginForm from "../../../containers/auth/ContainerLoginForm";
import {GOOGLE_AUTH_URL} from "./OauthGoogle";
import {NAVER_AUTH_URL} from "./OauthNaver";
import {ContentMiddleHeader} from "../../common/StyledHeader";

const ModalLoginBlock = styled.div`
  box-sizing: border-box;
  width: 25vw;
  margin: 0;
  padding: 0;
`;


const LoginInputBlock = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: fit-content;
`;


const LoginInputBlock2 = styled.div`
  box-sizing: border-box;
  width: fit-content;
  height: fit-content;
  margin: 0.5vw 0;
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
  width: 100%;
  height: fit-content;
  margin: 2vw 0;
  padding: 0;
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
  width: 100%;
  height: fit-content;
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

const LoginBlock = () => {
    return (
        <>
            <ModalLoginBlock>
                <LoginInputBlock>
                    <ContentMiddleHeader>로그인</ContentMiddleHeader>
                    <LoginInputBlock2>
                        <ContainerLoginForm/>
                    </LoginInputBlock2>

                    <GoFindInfo>
                        <Link to={"/"} style={{color: '#707070', textDecoration: 'none'}}>아이디/비밀번호 찾기</Link>
                    </GoFindInfo>
                </LoginInputBlock>
                <LoginOAuthBlock>
                    <LineTitle>소셜 계정으로 로그인 하기</LineTitle>
                    <OauthIconBlock>
                        <a href={GOOGLE_AUTH_URL}><img src={GoogleIcon} alt={"구글로 로그인"}/></a>
                        <a href={NAVER_AUTH_URL}><img src={NaverIcon} alt={"네이버로 로그인"}/></a>
                        <a href={KAKAO_AUTH_URL}><img src={KakaoIcon} alt={"카카오로 로그인"}/></a>
                    </OauthIconBlock>
                </LoginOAuthBlock>
                <GoToSignUpComponent>
                    아직 회원이 아니신가요? &nbsp;
                    <span className={"highlight"}> <Link to={"/register"} style={{
                        color: '#FFB663',
                        textDecoration: 'none'
                    }}>회원 가입 하기</Link></span>
                </GoToSignUpComponent>
            </ModalLoginBlock>
        </>
    );
};

export default LoginBlock;
