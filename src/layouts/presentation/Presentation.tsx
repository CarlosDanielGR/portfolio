import { Banner, Hello, Profile } from ".";
import "./styles/Presentation.css";

function Presentation() {
  return (
    <>
      <h1 className="presentation">
        Software
        <span> developer</span>
      </h1>
      <div className="presentation-profile">
        <div>
          <Hello />
          <Profile />
        </div>
        <Banner />
      </div>
    </>
  );
}
export default Presentation;
