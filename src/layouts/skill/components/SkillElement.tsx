import Tooltip from "@mui/material/Tooltip";
import { ISkill } from "../interfaces/skill.interface";
import "./../styles/SkillElement.css";

interface Props {
  skill: ISkill;
}

function SkillElement({ skill }: Props) {
  return (
    <figure className="skill-element">
      <Tooltip title={skill.title}>
        <img src={skill.src} alt={skill.alt} />
      </Tooltip>
    </figure>
  );
}
export default SkillElement;
