import { Hello, Profile } from ".";
import "./styles/Presentation.css";

function Presentation() {
  return (
    <>
      <div className="presentation-content">
        <h1 className="presentation">
          Full-stack
          <span> developer</span>
        </h1>
      </div>
      <Hello />
      <Profile />
    </>
  );
}
export default Presentation;
