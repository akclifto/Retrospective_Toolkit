/**
 * Stateless component that displays the header for all of the landing pages.
 */

import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

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
  sfLogo: {
    width: "300px",
    height: "50px",
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <>
      <AppBar className={classes.toolbar}>
        <Toolbar className={classes.root}>
          <Link to="/">
            <img className={classes.sfLogo} src={sfLogoURL} alt="logo" />
          </Link>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};

export default Header;
