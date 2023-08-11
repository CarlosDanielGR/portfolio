import { Hello, Profile } from ".";
import "./styles/Presentation.css";

function Presentation() {
  return (
    <>
      <h1 className="presentation">
        Full-stack
        <span> developer</span>
      </h1>
      <Hello />
      <Profile />
    </>
  );
}
export default Presentation;
