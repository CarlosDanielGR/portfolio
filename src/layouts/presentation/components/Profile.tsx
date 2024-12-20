import { Button } from "@mui/material";
import "./../styles/Profile.css";

function Profile() {
  return (
    <p className="profile">
      I am a full-stack developer, specializing in frontend and semi-senior in
      Angular. I also have experience in backend development using NestJS and
      Laravel.
      <Button
        variant="contained"
        href="./fullstack_carlosguzman.pdf"
        download="cv_carlosguzman"
      >
        Download CV
      </Button>
    </p>
  );
}
export default Profile;
