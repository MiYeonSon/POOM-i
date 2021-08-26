import React from "react";
import Logo from "./assets/mainLogoBlack.png";
import "./PoomIFeacture.css";
import Elem01 from "./assets/feactureElem01.png";
import Elem02 from "./assets/feactureElem02.png";
import Elem03 from "./assets/feactureElem03.png";
import Elem04 from "./assets/feactureElem04.png";

const PoomIFeacture = () => {
  return (
    <div className={"PoomIFeacture"}>
      <div className={"article"}>
        <img src={Logo} alt="logo" />
        <div className={"headingText"}> 로 공동 육아 쉽게 해요.</div>
      </div>

      <div className={"Feactures"}>
        <div className={"FeactureElem"}>
          <div>
            <img src={Elem01} alt="특징1" />
          </div>
          <div className={"text"}>
            아파트 내에서 <br />
            가까운 이웃과 <br />
            시작할 수 있어요
          </div>
        </div>
        <div className={"FeactureElem"}>
          <div>
            <img src={Elem02} alt="특징2" />
          </div>
          <div className={"text"}>
            갑작스러운 일에도 <br />
            품앗이 꾼을 빠르게 <br />
            찾을 수 있어요.
          </div>
        </div>
        <div className={"FeactureElem"}>
          <div>
            <img src={Elem03} alt="특징3" />
          </div>
          <div className={"text"}>
            다양한 활동을 <br />
            이웃 친구와
            <br />
            함께 할 수 있어요.
          </div>
        </div>
        <div className={"FeactureElem"}>
          <div>
            <img src={Elem04} alt="특징1" />
          </div>
          <div className={"text"}>
            품아이는 언제나 무료! <br />
            감사는 마음으로 <br />
            전해요 :)
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoomIFeacture;
