import { Hello, Profile } from ".";
import "./styles/Presentation.css";

function Presentation() {
  return (
    <>
      <div className="presentation-content">
        <h1 className="presentation">
          <span>Full-stack </span>
          developer
        </h1>
      </div>
      <Hello />
      <Profile />
    </>
  );
}
export default Presentation;
