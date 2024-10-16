import { Skill } from "../skills.data";
import "./../styles/Skill.css";

interface Props {
  skill: Skill;
}

function SkillElement({ skill }: Props) {
  const levels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="skill">
      <div className="skill-name">
        <img src={skill.src} alt={skill.alt} />
        <span>{skill.name}</span>
      </div>
      <div className="skill-content-levels">
        {levels.map((value: number) => (
          <div
            key={value}
            className={`skill-level ${
              skill.level >= value ? "skill-level-active" : ""
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
export default SkillElement;
