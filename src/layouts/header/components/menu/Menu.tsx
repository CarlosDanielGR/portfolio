import { useState } from "react";
import { Button, Drawer } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Social from "@shared/components/social/Social";
import { Logo, Navbar } from "..";
import "./Menu.css";

function Menu() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <>
      <Button className="menu-btn" onClick={toggleDrawer(true)}>
        <MenuIcon />
      </Button>
      <Drawer className="menu" open={open} onClose={toggleDrawer(false)}>
        <Logo />
        <Navbar setOpen={setOpen} isOpen={open} />
        <div className="menu-social">
          <Social />
        </div>
      </Drawer>
    </>
  );
}
export default Menu;
