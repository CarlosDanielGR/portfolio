import { Button } from "@mui/material";
import { Menu } from "./components";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <Menu />
      <Button className="header-contact-btn" variant="contained">
        Contact me
      </Button>
    </header>
  );
}
export default Header;
