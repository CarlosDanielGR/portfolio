import { Hello, Profile } from ".";
import "./styles/Presentation.css";

function Presentation() {
  return (
    <>
      <h1 className="presentation">
        <span>Full-stack </span>
        developer
      </h1>
      <Hello />
      <Profile />
    </>
  );
}
export default Presentation;
