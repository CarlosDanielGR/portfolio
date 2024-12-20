import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import "./Social.css";

function Social() {
  return (
    <ul className="social">
      <li>
        <a href="https://wa.link/dklhtn" target="_blank">
          <WhatsAppIcon />
        </a>
      </li>
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
export default Social;
