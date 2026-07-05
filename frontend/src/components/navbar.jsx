import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {

  const location = useLocation();

  const navButtonStyle = (path) => ({
    color: "white",
    fontWeight: location.pathname === path ? "bold" : "normal",
    borderBottom:
      location.pathname === path
        ? "2px solid white"
        : "2px solid transparent",
    borderRadius: 0,
    mx: 1
  });

  return (
    <AppBar position="sticky" elevation={2}>
      <Toolbar>

        <Typography
          variant="h6"
          sx={{
            flexGrow: 1,
            fontWeight: "bold",
            letterSpacing: 1
          }}
        >
          🛡 AccessGuard
        </Typography>

        <Box>

          <Button
            component={Link}
            to="/"
            sx={navButtonStyle("/")}
          >
            Dashboard
          </Button>

          <Button
            component={Link}
            to="/reports"
            sx={navButtonStyle("/reports")}
          >
            Reports
          </Button>

          <Button
            component={Link}
            to="/about"
            sx={navButtonStyle("/about")}
          >
            About
          </Button>

        </Box>

      </Toolbar>
    </AppBar>
  );
}