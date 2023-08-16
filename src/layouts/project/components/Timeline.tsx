import { Redirect } from "..";
import "./../styles/Timeline.css";

function Timeline() {
  return (
    <div className="timeline">
      <div className="timeline-section">
        <div className="timeline-middle">
          <div className="timeline-circle"></div>
        </div>
        <div className="timeline-content">
          <span>2021 - rick-and-morty</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            eum ipsa soluta eligendi rerum fugiat enim similique repellat,
            doloremque fugit officia magni sunt accusamus quo autem cupiditate
            delectus sed aliquid.
          </p>
          <Redirect />
        </div>
      </div>
    </div>
  );
}
export default Timeline;
