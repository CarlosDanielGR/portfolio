import { INavLink } from "../interfaces/link.interface";
import "./../styles/Link.css";

interface Props {
  link: INavLink;
}

function Link({ link }: Props) {
  return (
    <a className="link" href={link.route}>
      {link.name}
    </a>
  );
}
export default Link;
