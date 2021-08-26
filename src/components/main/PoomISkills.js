import React, {useState, useCallback} from "react";
import "./PoomISkills.css";
import PoomISkillsList from "./PoomISkillsList";
import SkillsDescription from "./SkillsDescription";

const PoomISkills = () => {
    const [skills, setSkills] = useState([
        {id: "skill01", text: "품앗이 찾기", selected: true},
        {id: "skill02", text: "품앗이 반 찾기", selected: false},
        {id: "skill03", text: "품앗이 터 찾기", selected: false},
        {id: "skill04", text: "POOM-i 이용 Tip", selected: false},

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
        <div className={"PoomISkill"}>
            <div className={"Content"}>
                <div className={"PoomISkillListArea"}>
                    <PoomISkillsList skills={skills} onClick={onClick}/>
                </div>
                <SkillsDescription skills={skills} onClick={onClick}/>
            </div>
        </div>
    );
};

export default PoomISkills;
