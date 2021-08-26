import React from "react";
import PoomISkillsButton from "./PoomISkillsButton";

const PoomISkillsList = ({ skills, onClick }) => {
  return (
    <div className={"PoomISkillsList"}>
      {skills.map((skill) => (
        <PoomISkillsButton skill={skill} key={skill.id} onClick={onClick} />
      ))}
    </div>
  );
};

export default PoomISkillsList;
