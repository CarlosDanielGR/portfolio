import { Button } from "@mui/material";
import { Logo, Menu, Navbar } from "./components";
import "./styles/Header.css";

function Header() {
  const goToContact = () => {
    window.location.hash = "#contact";
  };

  return (
    <header className="header">
      <div className="header-menu">
        <Menu />
      </div>
      <div className="header-web">
        <Logo />
        <Navbar />
      </div>
      <Button
        className="header-contact-btn"
        variant="contained"
        onClick={goToContact}
      >
        Contact me
      </Button>
    </header>
  );
}
export default Header;
