/**
 * Stateless component that displays the header for all of the landing pages.
 */

import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";
import SettingsApplicationsSharpIcon from "@material-ui/icons/SettingsApplicationsSharp";

const sfLogoURL = "https://d1g31diwtzkeb3.cloudfront.net/statefarmLogo.svg";

// eslint-disable-next-line no-unused-vars
const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: "0px -5px 5px rgba(0,0,0,0.05)",
  },
  toolbar: {
    position: "fixed",
    bottom: "auto",
    top: 0,
    backgroundColor: "whitesmoke",
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    color: "black",
    textDecoration: "none",
  },
  sfLogo: {
    width: "300px",
    height: "50px",
  },
}));

/** *
 * HideOnScroll triggers the Header to hide when scrolling down the page, and to
 * appear again when scrolling back up page.
 */
function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({ target: undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.node.isRequired,
};

const Header = () => {
  const classes = useStyles();

  return (
    <>
      <HideOnScroll>
        <AppBar className={classes.toolbar}>
          <Toolbar className={classes.root}>
            <Link to="/">
              <img className={classes.sfLogo} src={sfLogoURL} alt="logo" />
            </Link>
            <div className={classes.grow} />
            <Link to="/login" className={classes.menuButton}>
              <Button>
                <SettingsApplicationsSharpIcon fontSize="large" />
                Login
              </Button>
            </Link>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </>
  );
};

export default Header;
