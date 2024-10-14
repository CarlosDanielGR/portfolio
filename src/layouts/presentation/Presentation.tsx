import { Hello, Profile, Title } from ".";
import "./styles/Presentation.css";

function Presentation() {
  return (
    <div className="presentation">
      <Title />
      <Hello />
      <Profile />
    </div>
  );
}
export default Presentation;
