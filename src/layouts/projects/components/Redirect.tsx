import GitHubIcon from "@mui/icons-material/GitHub";
import Tooltip from "@mui/material/Tooltip";
import "./../styles/Redirect.css";

interface Props {
  link: string;
}

function Redirect({ link }: Props) {
  return (
    <a className="redirect" href={link} target="_blank">
      <Tooltip title="Go to repository" placement="top">
        <GitHubIcon />
      </Tooltip>
    </a>
  );
}
export default Redirect;
