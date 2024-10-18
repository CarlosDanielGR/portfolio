import SkillElement from "./components/SkillElement";
import { SKILLS, SkillName } from "./skills.data";
import "./styles/Skills.css";

function Skill() {
  const skills = SKILLS;
  return (
    <div id="skills">
      <h4 className="subtitle">Skills</h4>
      <section className="skills-content">
        {Object.keys(skills).map((key, index) => (
          <SkillElement key={index} skill={skills[key as SkillName]} />
        ))}
      </section>
    </div>
  );
}
export default Skill;
