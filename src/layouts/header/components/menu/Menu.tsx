import { useState } from "react";
import { Button, Drawer } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Logo } from "..";
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
        <Logo text="Carlos Guzmán" />
      </Drawer>
    </>
  );
}
export default Menu;
