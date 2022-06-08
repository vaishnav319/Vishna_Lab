import * as React from "react";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Drawer,
  useTheme,
  useMediaQuery,
  IconButton,
  Box,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import BiotechIcon from "@mui/icons-material/Biotech";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
const useStyles = makeStyles((theme) => ({
  hamburger: {
    color: "white",
    marginLeft: "auto",
  },
  sidedrawer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    rowGap: "3rem",
    padding: "2rem",
    width: "70vw",
    height: "100vh",
    // background: "#F23A5E",
    position: "relative",
    // padding: "10px 0 0 3rem",
  },
  closeIcon: {
    width: "3rem",
    height: "3rem",
    marginLeft: "auto",
    position: "absolute",
    right: "1rem",
    top: "1rem",
    cursor: "pointer",
    color: "#227AEB",
  },
  logo: {
    width: "15rem",
    height: "4rem",
  },
  navLinks: {
    fontWeight: 800,
    fontSize: "10px",
    lineHeight: "22px",
    color: "#fff",
    cursor: "pointer",
    borderRadius: "10px",
    padding: "10px 20px",
    textAlign: "center",
    marginRight: "15px",
    "&:hover": {
      background: "rgba(34, 122, 235, 0.2)",
      transition: "1s",
    },
  },
}));

const MenuLink = [
  {
    link: "/",
    title: "Dashboard",
    logo: <HomeIcon />,
  },
  {
    link: "/people",
    title: "People",
    logo: <PeopleIcon />,
  },
  {
    link: "/research ",
    title: "Research",
    logo: <BiotechIcon />,
  },
  {
    link: "/projects",
    title: "Projects",
    logo: <AccountTreeIcon />,
  },
];

export default function Header() {
  const classes = useStyles();
  const theme = useTheme();
  // const history = useHistory();
  const isMobile = useMediaQuery(theme.breakpoints.down(1250));

  const [open, setOpen] = useState(false);
  const handleDrawer = (bool) => () => {
    setOpen(bool);
  };

  return (
    <>
      <AppBar
        position="fixed"
        component="header"
        style={{
          padding: "10px",
          background: "black",
          boxShadow: "none",
        }}
      >
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <NavLink to="/" style={{ textDecoration: "none" }}>
              <img
                src={require("../Assets/home/updatedlogo.png")}
                style={{ width: "17rem", height: "5rem" }}
                alt="logo"
                className={classes.logo}
              />
            </NavLink>
          </Box>

          {!isMobile && (
            <Toolbar>
              {MenuLink.map((item, _i) => (
                <>
                  <NavLink
                    to={item.link}
                    className={classes.navLinks}
                    style={({ isActive }) => {
                      return {
                        textDecoration: "none",
                        borderRadius: "0",
                        color: isActive ? "#68D3D4" : "",
                        borderBottom: isActive ? "2px solid #68D3D4" : "",
                      };
                    }}
                  >
                    <Box sx={{ display: "flex" }}>
                      {item.logo}
                      <Typography>
                        <b style={{ padding: "0.5rem" }}>{item.title}</b>
                      </Typography>
                    </Box>
                  </NavLink>
                </>
              ))}
            </Toolbar>
          )}

          {isMobile && (
            <IconButton
              className={classes.hamburger}
              onClick={handleDrawer(true)}
            >
              <MenuIcon style={{ color: "#2666CF" }} />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="right"
        onClose={handleDrawer(false)}
        open={isMobile && open}
      >
        <Box className={classes.sidedrawer}>
          <CloseIcon
            className={classes.closeIcon}
            onClick={handleDrawer(false)}
          />
          <NavLink to="/" style={{ textDecoration: "none" }}>
            <img src={require("../Assets/home/logo2.png")} alt="logo" />
          </NavLink>
          {MenuLink.map((item, _i) => (
            <>
              <NavLink
                to={item.link}
                className={classes.navLinks}
                onClick={handleDrawer(false)}
                style={({ isActive }) => {
                  return {
                    textDecoration: "none",
                    borderRadius: "0",
                    color: isActive ? "#227AEB" : "black",
                    borderBottom: isActive ? "2px solid #227AEB" : "",
                  };
                }}
              >
                <Typography>
                  <b>{item.title}</b>
                </Typography>
              </NavLink>
            </>
          ))}
        </Box>
      </Drawer>
    </>
  );
}
