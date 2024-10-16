import LaunchIcon from "@mui/icons-material/Launch";
import GitHubIcon from "@mui/icons-material/GitHub";
import Tooltip from "@mui/material/Tooltip";
import { ProjectUrl } from "../../project/interfaces/cardTimeline.interface";
import "./../styles/Redirect.css";

interface Props {
  redirect: Partial<ProjectUrl>;
}

function Redirect({ redirect }: Props) {
  return (
    <a className="redirect" href={redirect.url} target="_blank">
      {redirect.icon === "git" ? (
        <Tooltip title="Go to repository" placement="top">
          <GitHubIcon />
        </Tooltip>
      ) : (
        <Tooltip title="Go to website" placement="top">
          <LaunchIcon />
        </Tooltip>
      )}
    </a>
  );
}
export default Redirect;
