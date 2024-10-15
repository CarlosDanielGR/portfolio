import { Profile, Title } from ".";
import "./styles/Presentation.css";

function Presentation() {
  return (
    <div className="presentation">
      <div>
        <Title />
      </div>
      <Profile />
    </div>
  );
}
export default Presentation;
