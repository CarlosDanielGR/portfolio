import { SKILLS } from "@shared/skills.data";
import Tags from "@shared/components/Tags/Tags";
import Job from "./components/Job";

const tagsBetenlace = [
  SKILLS.angular,
  SKILLS.javascript,
  SKILLS.typeScript,
  SKILLS.rxjs,
  SKILLS.html,
  SKILLS.css,
  SKILLS.sass,
  SKILLS.bootstrap,
  SKILLS.tailwind,
  SKILLS.ngrx,
  SKILLS.ionic,
];

const tagsInnovating = [
  SKILLS.angular,
  SKILLS.javascript,
  SKILLS.typeScript,
  SKILLS.rxjs,
  SKILLS.html,
  SKILLS.css,
  SKILLS.sass,
  SKILLS.bootstrap,
  SKILLS.material,
];

function Employment() {
  return (
    <div id="employment" className="employment">
      <h5 className="subtitle">Employment</h5>
      <Job
        role="Frontend developer"
        company="Innovating Solutions"
        date="September 2023 - September 2024"
      >
        <p>
          As a front-end developer, I was responsible for updating, correcting
          and creating new modules, while continuously working on improving the
          code and structure of the applications. I focused on optimizing
          existing projects by:{" "}
        </p>
        <ul>
          <li>
            <strong>Code migration</strong>: I transitioned an old project to a
            new platform, ensuring its proper functioning and rewriting the code
            based on current standards to ensure scalability and
            maintainability.
          </li>
          <li>
            <strong>Updating dependencies</strong>: Ensuring that applications
            were up to date with the latest versions of libraries and
            frameworks.
          </li>
          <li>
            <strong>Creating reusable components</strong>: Improving efficiency
            and reducing code duplication. Code standardization: Implementing
            good development practices and consistent standards across all
            projects.
          </li>
          <li>
            <strong>Performance optimization</strong>: Through extensive
            debugging and code tuning to improve the speed and functionality of
            applications.
          </li>
        </ul>
        <p>
          In addition, I provided support to my teammates, solving doubts and
          collaborating in the solution of technical problems. All this was done
          in a remote work environment, ensuring effective communication and
          contributing to the collective success of the team.{" "}
        </p>
        <Tags tags={tagsInnovating} />
      </Job>
      <Job
        role="Frontend developer"
        company="Betenlace SAS"
        date="October 2021 - July 2023"
      >
        <p>
          As responsible for the integral support of the company's projects, I
          carried out the development of new projects from their conception to
          their final implementation. My focus was on applying the best
          development and analysis practices, ensuring optimal performance and
          proper operation of the applications.{" "}
        </p>
        <ul>
          <li>
            <strong>Change and standards management</strong>: I supervised and
            managed changes in projects, ensuring code quality and adapting
            structures to specific requirements. I defined code standards and
            established clear guidelines to ensure consistency and efficiency in
            development.
          </li>
          <li>
            <strong>Technical support and collaboration</strong>: I provided
            direct support to front-end developers, resolving technical doubts,
            offering guidance in the implementation of specific features,
            addressing conflicts in Git and collaborating in debugging bugs. I
            actively participated in the final deployment process of the
            projects.
          </li>
          <li>
            <strong>Technical interviews</strong>: I conducted technical
            interviews to select new front-end developers, evaluating their
            skills and ensuring that they matched the team's needs and company
            standards.
          </li>
        </ul>
        <p>
          My main objective was to facilitate a fluid and collaborative work
          environment, promoting the professional growth of the team and
          ensuring the success of each project.
        </p>
        <Tags tags={tagsBetenlace} />
      </Job>
    </div>
  );
}
export default Employment;
