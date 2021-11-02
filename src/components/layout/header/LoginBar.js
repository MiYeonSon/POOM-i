import React, {useState} from "react";
import "./LoginBar.css";
import {Link} from 'react-router-dom';
import LoginBlock from "../../routing-page/signIn/LoginBlock";
import styled from "styled-components";
import Modal from "../../common/Modal";

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

const LoginBar = ({user}) => {
    const [visible, setVisible] = useState(false);
    const onClose = () => {
        setVisible(false);
    }
    return (
        <div className="LoginBar">
            <StyledButton className={"loginButton"} onClick={() => setVisible(true)}>로그인</StyledButton>
            {visible && <Modal visible={visible} onClose={onClose}>
                <LoginBlock/>

            </Modal>}


            <StyledButton><Link to={"/signUp"}
                                style={{color: 'white', textDecoration: 'none'}}>회원가입</Link></StyledButton>
        </div>
    );
};

export default LoginBar;