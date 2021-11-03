import React, {useState} from "react";
import {Link} from 'react-router-dom';
import LoginBlock from "../../routing-page/signIn/LoginBlock";
import styled from "styled-components";
import Modal from "../../common/Modal";

const LoginBarTemplate = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 5vh;
    padding-right: 10vw;
    background: #FFB663;
    font-family: 'BMHANNAPro';

    display: flex;
    align-items: center;
    justify-content: flex-end;

  button + button{
    box-sizing: border-box;
    width: fit-content;
    padding-left: 1vw;

    border-left: 0.25vw solid white;
  }
`;

const LoginButtonsBlock = styled.div`
  box-sizing: border-box;
  width: fit-content;
  
  border: 1px solid black;
`;

const StyledButton = styled.button`
  box-sizing: border-box;
  width: fit-content;
  height: 3vh;
  margin: 0 0.5vw;

  background: none;
  border: none;
  font-family: 'BMHANNAPro';
  font-size: 1.1vw;
  color: white;

  cursor: pointer;
`;

const LoginBar = ({user, onLogout}) => {
    const [visible, setVisible] = useState(false);
    const onClose = () => {
        setVisible(false);
    }
    return (
        <LoginBarTemplate>
            {user ? (
                <LoginButtonsBlock>
                    <StyledButton>{user.nick} 님 환영합니다!</StyledButton>
                    <StyledButton onClick={onLogout}>로그아웃</StyledButton>
                </LoginButtonsBlock>
            ) : (
                <LoginButtonsBlock>
                    <StyledButton className={"loginButton"} onClick={() => setVisible(true)}>로그인</StyledButton>
                    {
                        visible &&
                        <Modal visible={visible} onClose={onClose}>
                            <LoginBlock/>
                        </Modal>
                    }
                    <StyledButton>
                        <Link to={"/signUp"} style={{color: 'white', textDecoration: 'none'}}>회원가입</Link>
                    </StyledButton>
                </LoginButtonsBlock>
            )}
        </LoginBarTemplate>
    );
};

export default LoginBar;