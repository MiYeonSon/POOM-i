import React from 'react';
import styled from "styled-components";

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

const LoginButton = styled.input`
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


const LoginForm = ({form, onChange, onSubmit}) => {
    return (
        <form onSubmit={onSubmit}>
            <GrayInput
                name={'email'} type={'email'} value={form.email} onChange={onChange} placeholder={'이메일'}/>
            <GrayInput
                name={'password'} type={'password'} value={form.password} onChange={onChange} placeholder={'비밀번호'} />

            <LoginButton type={'submit'} value={'로그인'}/>
        </form>
    );
};

export default LoginForm;
