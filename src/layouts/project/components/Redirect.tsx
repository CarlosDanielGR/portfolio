import LaunchIcon from "@mui/icons-material/Launch";
import "./../styles/Redirect.css";

interface Props {
  url: string;
}

function Redirect({ url }: Props) {
  return (
    <a className="redirect" href={url} target="_blank">
      View project
      <LaunchIcon />
    </a>
  );
}
export default Redirect;
