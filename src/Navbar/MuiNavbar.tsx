import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Stack,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import { useState } from "react";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import KeybordArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
export const MuiNavbar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="logo"
          sx={{ mr: 2 }}
        >
          <CatchingPokemonIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Pokedex
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button variant="contained" color="error">
            Features
          </Button>
          <Button variant="contained" color="error">
            Pricing
          </Button>
          <Button variant="contained" color="error">
            About
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={handleClick}
            id="resources-button"
            aria-controls={open ? "resources-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-haspopup="true"
            endIcon={<KeybordArrowDownIcon />}
          >
            Resources
          </Button>
          <Button variant="contained" color="secondary">
            Login
          </Button>
          <Button variant="contained" color="secondary">
            Register
          </Button>
        </Stack>
        <Menu
          id="resources-menu"
          anchorEl={anchorEl}
          open={open}
          MenuListProps={{
            "aria-labelledby": "resources-button",
          }}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem onClick={handleClose}>Blog</MenuItem>
          <MenuItem onClick={handleClose}>Podcast</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};
