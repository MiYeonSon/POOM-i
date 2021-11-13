import React from "react";
import styled from 'styled-components';
import MainLogo from "../../common/assets/mainLogo.png";
import {Link} from "react-router-dom";

const NaviBarTemplate = styled.div`
  box-sizing: border-box;
  width: 100vw;
  height: 10vh;
  padding: 0 10vw;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: 0.01vw solid #F1F1F1;
  
  img{
    box-sizing: border-box;
    width: 12vw;
    height: fit-content;
    cursor: pointer;
  }
`;

const MenuBlock = styled.div`
    button {
      width: fit-content;
      height: auto;
      margin: 0 0.5vw;
      font-family: "BM HANNA Air";
      font-size: 1.2vw;
      color: #707070;
      border: none;
      background: none;
      cursor: pointer;
    }
  
  button + button {
    box-sizing: border-box;
    padding-left: 1.5vw;
    border-left: 0.03vw solid #707070;
  }
  
  button:hover{
    color: #FFB663;
    box-sizing: border-box;
    transition: 0.15s color ease-in;
  }
`;

const NaviBar = () => {
    return (
        <NaviBarTemplate>
            <Link to={"/"}><img src={MainLogo} alt="mainLogo" /></Link>
            <MenuBlock>
                <button>서비스 안내</button>
                <Link to={"/childcare"}><button>품앗이 찾기</button></Link>
                <Link to={"/playground"}><button>품앗이 터 찾기</button></Link>
            </MenuBlock>
        </NaviBarTemplate>
    );
};

export default NaviBar;