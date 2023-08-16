import { CardTimeline } from "..";
import "./../styles/Timeline.css";

function Timeline() {
  return (
    <div className="timeline">
      <div className="timeline-section">
        <div className="timeline-middle">
          <div className="timeline-circle"></div>
        </div>
        <CardTimeline />
      </div>
    </div>
  );
}
export default Timeline;
