import "./../styles/Navbar.css";

interface NavLink {
  id: number;
  name: string;
  route: string;
  hide?: boolean;
}

interface Props {
  isOpen: boolean;
  setOpen: Function;
}

function Navbar(props: Partial<Props>) {
  const LINKS: NavLink[] = [
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
    {
      id: 4,
      name: "Contact",
      route: "#contact",
    },
  ];

  const toggleDrawer = (newOpen: boolean) => () => {
    if (props.setOpen) props.setOpen(newOpen);
  };

  return (
    <ul className="navbar">
      {LINKS.filter((data) => !data.hide).map((links) => (
        <li key={links.id}>
          <a
            href={links.route}
            className="navbar-link"
            onClick={toggleDrawer(!props.isOpen)}
          >
            {links.name}
          </a>
        </li>
      ))}
    </ul>
  );
}
export default Navbar;
