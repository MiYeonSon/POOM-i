import React from "react";
import PoomISkillsButton from "./PoomISkillsButton";

const PoomISkillsList = ({ skills, onClick }) => {
  return (
    <>
      {skills.map((skill) => (
        <PoomISkillsButton skill={skill} key={skill.id} onClick={onClick} />
      ))}
    </>
  );
};

export default PoomISkillsList;
