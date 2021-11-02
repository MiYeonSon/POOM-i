import React from "react";
import "./SkillsDescription.css";
import Skill01 from "./assets/skill01.png";
import Skill02 from "./assets/skill02.png";
import Skill03 from "./assets/skill03.png";

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

            default:
                console.log("POOM-i Skill 컴포넌트 에러 발생");
        }
    }

    reducer(detailElem);

    return (
        <div className={"SkillsDescription"}>
            <div className={"SkillImg"}>
                <img src={imgSrc} alt="품앗이 찾기"/>
            </div>
            <div className={"Text"}>
                {text}
            </div>
        </div>
    );
};

export default SkillsDescription;
