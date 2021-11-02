import React from "react";
import Logo from "./assets/mainLogo.png";
import "./PoomICS.css";

const PoomICS = () => {
  return (
    <div className={"PoomICS"}>
      <div className={"CSContact"}>
        <div className={"CSContactTitle"}>[ 이용 문의 ]</div>
        <div className={"CSEmail"}>
          20161715@edu.hanbat.ac.kr <br />
          20181710@edu.hanbat.ac.kr
        </div>
        <div className={"CSTime"}>
          * 이용 시간 : 09:00 ~ 20:00 <br />* 주말∙공휴일 휴무
        </div>
      </div>

      <div className={"VerticalLine"}></div>

      <div className={"MorePoomI"}>
        <img src={Logo} alt="logo" />
        <button>더 알아보기 ></button>
      </div>
    </div>
  );
};

export default PoomICS;
