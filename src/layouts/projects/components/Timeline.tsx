import { PROJECTS } from "../project.data";
import { CardTimeline } from "..";
import "./../styles/Timeline.css";

function Timeline() {
  const projects = PROJECTS;
  return (
    <div className="timeline">
      {projects.map((projects, index) => (
        <div key={index} className="timeline-section">
          <div className="timeline-middle">
            <div className="timeline-circle"></div>
          </div>
          <CardTimeline cardData={projects} />
        </div>
      ))}
    </div>
  );
}
export default Timeline;
