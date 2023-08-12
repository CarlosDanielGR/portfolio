import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import "./styles/Navbar.css";

function Navbar() {
  return (
    <ul className="navbar">
      <li>
        <a
          href="https://www.linkedin.com/in/carlos-guzman-rios/"
          target="_blank"
        >
          <LinkedInIcon />
        </a>
      </li>
      <li>
        <a href="https://github.com/CarlosDanielGR" target="_blank">
          <GitHubIcon />
        </a>
      </li>
    </ul>
  );
}
export default Navbar;
