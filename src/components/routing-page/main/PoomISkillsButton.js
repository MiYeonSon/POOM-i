import React from "react";
import cn from "classnames";
import "./PoomISkillsButton.css";

// TODO : css 제거
const PoomISkillsButton = ({ skill, onClick }) => {
  const { id, text, selected } = skill;

  return (
    <div className={"PoomISkillsButton"}>
      <button className={cn({ selected })} onClick={() => onClick(id)}>
        {text}
      </button>
    </div>
  );
};

export default PoomISkillsButton;
