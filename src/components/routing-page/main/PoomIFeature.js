import React from "react";
import styled from "styled-components";

import Logo from "./assets/mainLogoBlack.png";
import Elem01 from "./assets/feactureElem01.png";
import Elem02 from "./assets/feactureElem02.png";
import Elem03 from "./assets/feactureElem03.png";
import Elem04 from "./assets/feactureElem04.png";

const FeatureTemplate = styled.div`
  box-sizing: border-box;
  width: 70vw;
  height: 45vh;
  margin: 4vw auto;
  padding: 1.5vw 5vw;

  color: #595959;
`;

const ContentHeader = styled.div`
  box-sizing: border-box;

  width: 40vw;
  height: 8vh;
  margin: 0 4vw;

  display: flex;
  align-items: center;
  
  img {
    box-sizing: border-box;
    width: 9vw;
    height: 4.2vh;
  }
  
  div{
    box-sizing: border-box;
    font-weight: 700;
    font-size: 1.4vw;
    padding-top: 0.5vw;
  }
`;

const FeatureContentTemplate = styled.div`
  box-sizing: border-box;
  width: 52.5vw;
  height: 30vh;
  margin: 0.5vw 4vw;
  padding: 0 3vw;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FeatureItemBlock = styled.div`
  box-sizing: border-box;

  width: 10vw;
  height: 28vh;
  padding: 1vw 0;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-content: stretch;

  text-align: center;
  
  img {
    box-sizing: border-box;
    width: 7.5vw;
    height: 7.5vw;
    margin: 0 auto;
  }
`;

const FeatureExplain = styled.div`
  box-sizing: border-box;
  width: 10vw;
  height: 10vh;
  margin: 1vw 0;
  font-family: 'LotteMartDream';
  font-weight: 400;
  font-size: 1vw;
  line-height: 1.4vw;
  color: #5A5A5A !important;
`;

const PoomIFeature = () => {
  return (
    <FeatureTemplate>
      <ContentHeader>
        <img src={Logo} alt="logo" />
        <div> 로 공동 육아 쉽게 해요.</div>
      </ContentHeader>

      <FeatureContentTemplate>
        <FeatureItemBlock>
          <div>
            <img src={Elem01} alt="특징1" />
          </div>
          <FeatureExplain>
            아파트 내에서 <br />
            가까운 이웃과 <br />
            시작할 수 있어요
          </FeatureExplain>
        </FeatureItemBlock>

        <FeatureItemBlock>
          <div>
            <img src={Elem02} alt="특징2" />
          </div>
          <FeatureExplain>
            갑작스러운 일에도 <br />
            품앗이 꾼을 빠르게 <br />
            찾을 수 있어요.
          </FeatureExplain>
        </FeatureItemBlock>

        <FeatureItemBlock>
          <div>
            <img src={Elem03} alt="특징3" />
          </div>
          <FeatureExplain>
            다양한 활동을 <br />
            이웃 친구와
            <br />
            함께 할 수 있어요.
          </FeatureExplain>
        </FeatureItemBlock>

        <FeatureItemBlock>
          <div>
            <img src={Elem04} alt="특징1" />
          </div>
          <FeatureExplain>
            품아이는 언제나 무료! <br />
            감사는 마음으로 <br />
            전해요 :)
          </FeatureExplain>
        </FeatureItemBlock>
      </FeatureContentTemplate>
    </FeatureTemplate>
  );
};

export default PoomIFeature;
