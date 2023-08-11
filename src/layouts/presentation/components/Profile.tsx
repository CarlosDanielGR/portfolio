import { Button } from "@mui/material";
import "./../styles/Profile.css";

function Profile() {
  return (
    <div className="profile">
      <h3>
        I am a passionate developer committed to continuous learning. I enjoy
        facing challenges and seeking optimal solutions for complex problems,
        always following the best development practices.
      </h3>
      <div className="profile-buttons">
        <Button
          variant="outlined"
          href="https://wa.link/er6wkp"
          target="_blank"
        >
          Contact us
        </Button>
        <Button
          variant="contained"
          href="./public/CV_CDGR.pdf"
          download="CV_CDGR"
        >
          Download CV
        </Button>
      </div>
    </div>
  );
}
export default Profile;
