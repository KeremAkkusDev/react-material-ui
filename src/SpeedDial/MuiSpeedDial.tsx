import { SpeedDial, SpeedDialAction } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import { useState } from "react";
export const MuiSpeedDial = () => {
  const [open, setOpen] = useState(false);
  return (
    <SpeedDial
      ariaLabel="Navigation speed dial"
      icon={<MenuIcon />}
      direction="up"
      sx={{ position: "absolute", bottom: 16, right: 16 }}
      open={open}
      onClick={() => setOpen(!open)}
    >
      <SpeedDialAction
        key="Home"
        icon={<HomeIcon />}
        tooltipTitle="Home"
        onClick={() => console.log("Home")}
      />
      <SpeedDialAction
        key="About"
        icon={<InfoIcon />}
        tooltipTitle="About"
        onClick={() => console.log("About")}
      />
      <SpeedDialAction
        key="Contact"
        icon={<ContactMailIcon />}
        tooltipTitle="Contact"
        onClick={() => console.log("Contact")}
      />
    </SpeedDial>
  );
};
