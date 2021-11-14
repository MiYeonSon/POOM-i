import React from "react";
import styled from 'styled-components';
import Skill01 from "./assets/skill01.png";
import Skill02 from "./assets/skill02.png";
import Skill03 from "./assets/skill03.png";
import Skill04 from "./assets/skill04.png";

const DescriptionTemplate = styled.div`
  box-sizing: border-box;
  width: 40vw;
  height: 32vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  border: 7px solid #FFB869;
  background-color: white;
  text-align: center;
  
  img{
    box-sizing: border-box;
    width:17vw;
    height: 20vh;
    margin: 0;
    padding: 0;
  }
  
  .text{
    box-sizing: border-box;
    width: 40vw;
    height: 8vh;
    margin: 0;
    padding: 0;
    font-size: 0.9vw;
    line-height: 1.2vw;
    white-space: pre-wrap;
    color: #666666;
  }
`;

const SkillsDescription = ({skills}) => {
    let detailElem = skills.filter((skills) => skills.selected === true);
    let imgSrc;
    let text;

    function reducer(detailElem) {
        switch (detailElem[0].id) {
            case "skill01":
                imgSrc = Skill01;
                text = "갑작스러운 상황에도 도움을 줄 수 있는 품앗이 꾼을 찾을 수 있어요.\n이외에도 장기, 단기 등 원하는 도움을 받을 수 있는\n품앗이 꾼들을 찾일 수 있어요!";
                break;
            case "skill02":
                imgSrc = Skill02;
                text = "다른 가족들과 정기적으로 공동 육아를 할 수 있는 품앗이 반이에요!\n우리 자녀 친구 만들고, 이웃 주민과 친해지고!\n품앗이 반 지금 시작해볼까요?";
                break;

            case "skill03":
                imgSrc = Skill03;
                text = "품앗이를 할 장소가 마땅치않나요? 우리 동네에서 쉽게 찾을 수 있어요!\n혹시 비어있는 아파트 공용공간을 발견하였나요? \n폼을 만들어 주민들의 동의를 얻어 새로운 품앗이 터로 만들어봐요!"

                break;

            case "skill04":
                imgSrc = Skill04;
                text = "품아이의 서비스는 거주지 인증 절차를 거쳐야 가입 및 활동이 가능합니다.\n가입된 회원도 주기적으로 문서 갱신 요청하여 회원의 실제 거주지를 파악합니다.\nPOOM-i의 모든 서비스는 안전을 위해 최선을 다하고 있습니다. 안심하고 이용해주세요 :)"

                break;

            default:
                console.log("POOM-i Skill 컴포넌트 에러 발생");
        }
    }

    reducer(detailElem);

    return (
        <DescriptionTemplate>
            <div className={"SkillImg"}>
                <img src={imgSrc} alt="품앗이 찾기"/>
            </div>
            <div className={"text"}>
                {text}
            </div>
        </DescriptionTemplate>
    );
};

export default SkillsDescription;
