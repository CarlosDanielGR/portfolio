import { DownloadCV, Profile, Title } from ".";
import "./styles/Presentation.css";

function Presentation() {
  return (
    <div className="presentation">
      <div>
        <Title />
        <Profile />
      </div>
      <div className="presentation-figure">
        <div className="presentation-cv">
          <DownloadCV />
        </div>
      </div>
    </div>
  );
}
export default Presentation;
