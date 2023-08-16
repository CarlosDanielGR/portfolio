import SkillElement from "./components/SkillElement";
import { SKILLS } from "./data/skills.data";
import "./styles/Skill.css";

function Skill() {
  const skills = SKILLS;
  return (
    <div id="skills">
      <h4>Skills</h4>
      <section className="skill-content">
        {skills.map((skill) => (
          <SkillElement key={skill.id} skill={skill} />
        ))}
      </section>
    </div>
  );
}
export default Skill;
