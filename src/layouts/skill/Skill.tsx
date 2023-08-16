import SkillElement from "./components/SkillElement";
import { ISkill } from "./interfaces/skill.interface";
import "./styles/Skill.css";

const URL_ASSETS = "./src/assets/skill/";

function Skill() {
  const SKILLS: ISkill[] = [
    {
      id: 1,
      alt: "rxjs",
      src: `${URL_ASSETS}rxjs.svg`,
      title: "Rxjs",
    },
    {
      id: 2,
      alt: "angular",
      src: `${URL_ASSETS}angular.svg`,
      title: "Angular",
    },
  ];
  return (
    <div>
      <h4>Skills</h4>
      <section className="skill-content">
        {SKILLS.map((skill) => (
          <SkillElement key={skill.id} skill={skill} />
        ))}
      </section>
    </div>
  );
}
export default Skill;
