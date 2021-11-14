import React, {useState, useCallback} from "react";
import styled from 'styled-components';
import PoomISkillsList from "./PoomISkillsList";
import SkillsDescription from "./SkillsDescription";

const SkillsTemplate = styled.div`
  box-sizing: border-box;
  padding: 5vw;
  width: 100%;
  height: 55vh;

  background: #FFF7F1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SkillsContentBlock = styled.div`
  box-sizing: border-box;
  width: 70vw;
  height: 40vh;
  
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SkillCategoryBlock = styled.div`
  box-sizing: border-box;
  width: fit-content;
  height: 32vh;
`;


// TODO : 품아이 이용 Tip 부분 추가
const PoomISkills = () => {
    const [skills, setSkills] = useState([
        {id: "skill01", text: "품앗이 찾기", selected: true},
        {id: "skill02", text: "품앗이 반 찾기", selected: false},
        {id: "skill03", text: "품앗이 터 찾기", selected: false},
        {id: "skill04", text: "POOM-i 안전성", selected: false},

    ]);

    const onClick = useCallback(
        (id) => {
            setSkills(
                skills.map((skill) =>
                    skill.id === id
                        ? {...skill, selected: true}
                        : {...skill, selected: false}
                )
            );
        },
        [skills]
    );

    return (
        <SkillsTemplate>
            <SkillsContentBlock>

                <SkillCategoryBlock>
                    <PoomISkillsList skills={skills} onClick={onClick}/>
                </SkillCategoryBlock>

                <SkillsDescription skills={skills} onClick={onClick}/>
            </SkillsContentBlock>
        </SkillsTemplate>
    );
};

export default PoomISkills;
