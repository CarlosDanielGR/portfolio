import SkillElement from "./components/SkillElement";
import { SKILLS } from "./skills.data";
import "./styles/Skills.css";

function Skill() {
  const skills = SKILLS;
  return (
    <div id="skills">
      <h4 className="skills-title">Skills</h4>
      <section className="skills-content">
        {skills.map((skill, index) => (
          <SkillElement key={index} skill={skill} />
        ))}
      </section>
    </div>
  );
}
export default Skill;
