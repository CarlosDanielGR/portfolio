import { Link } from ".";
import { INavLink } from "./interfaces/link.interface";
import "./styles/Navbar.css";

function Navbar() {
  const LINKS: INavLink[] = [
    {
      id: 1,
      name: "Skills",
      route: "#skills",
    },
    {
      id: 2,
      name: "Projects",
      route: "#projects",
    },
    {
      id: 3,
      name: "Employment",
      route: "#employment",
    },
  ];

  return (
    <ul className="navbar">
      {LINKS.filter((data) => !data.hide).map((links) => (
        <li key={links.id}>
          → <Link link={links} />
        </li>
      ))}
    </ul>
  );
}
export default Navbar;
