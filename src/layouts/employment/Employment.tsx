import { Tags } from ".";
import "./styles/Employment.css";

const TAGS1 = [
  "TypeScript",
  "Angular",
  "SASS",
  "HTML",
  "Rxjs",
  "Ngrx",
  "Ionic",
  "Tailwind",
  "Bootstrap",
];

const TAGS2 = ["TypeScript", "Angular", "HTML", "Rxjs", "Angular material"];

function Employment() {
  return (
    <div id="employment" className="employment">
      <h5 className="subtitle">Employment</h5>
      <div className="employment-title">
        <span className="employment-name">Inlaze (Front-End dev)</span>
        <span className="employment-date">October 2021 - July 2023</span>
      </div>
      <p>
        Responsible for providing comprehensive support to the company's
        projects and carrying out the development of new projects from
        conception to the final implementation phase, my work focused on
        applying best practices and analysis to ensure optimal performance and
        proper functioning.
      </p>
      <p>
        I supervised and managed changes, ensured code quality, and maintained
        the appropriate structure for various projects, adapting it to their
        specific requirements. I defined code standards and necessary structures
        for each project, establishing clear guidelines to ensure consistency
        and efficiency in development.
      </p>
      <p>
        Additionally, I provided direct support to front-end developers,
        resolving doubts, providing guidance on particular features, addressing
        conflicts in Git, debugging errors, and collaborating in the final
        deployment process. My goal was to facilitate a smooth and collaborative
        working environment, ensuring the success of each project and fostering
        the professional growth of the entire team.
      </p>
      <Tags tags={TAGS1} />
      <div className="employment-title">
        <span className="employment-name">
          Innovating Solutions (Front-End dev)
        </span>
        <span className="employment-date">September 2023 - Present</span>
      </div>
      <p>
        As a front-end developer, I carry out the updating, correction, and
        creation of new projects, as well as the continuous improvement of code
        and structure. I dedicate special attention to optimizing existing
        projects through updating dependencies, standardizing code, and
        improving application performance through debugging and code
        optimization.
      </p>
      <p>
        I seek to perfect every aspect of projects, enhancing both performance
        and user experience. Additionally, I stand out for proposing new ideas
        and innovative solutions to address existing challenges.
      </p>
      <Tags tags={TAGS2} />
    </div>
  );
}
export default Employment;
