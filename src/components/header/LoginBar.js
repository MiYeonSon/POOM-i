import React, {useState} from "react";
import "./LoginBar.css";
import { Link } from 'react-router-dom';
import ModalLogin from "../signIn/ModalLogin";
import styled from "styled-components";

const StyledButton = styled.button`
  box-sizing: border-box;
  width: 5vw;
  height: 3vh;

  background: none;
  border: none;
  font-family: 'BMHANNAPro';
  font-size: 1.1vw;
  color: white;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`;

const LoginBar = () => {
    const [openLogin, setOpenLogin] = useState(false);
    return (
        <div className="LoginBar">
            <StyledButton className={"loginButton"} onClick={() => setOpenLogin(!openLogin)}>로그인</StyledButton>
            {openLogin ? <ModalLogin open={openLogin}/> : null}
            <StyledButton><Link to={"/signUp"} style={{ color : 'white', textDecoration : 'none'}}>회원가입</Link></StyledButton>
        </div>
    );
};

export default LoginBar;