import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(() => ({
  root: {
    boxShadow: "0 -7px 5px rgba(0,0,0,0.10)",
  },
  footer: {
    top: "auto",
    position: "fixed",
    bottom: 0,
    backgroundColor: "whitesmoke",
    height: "40px",
  },
  footer__text: {
    color: "black",
    fontSize: "1rem",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  grow: {
    flexGrow: 1,
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <>
      <AppBar className={classes.footer}>
        <Toolbar className={classes.root}>
          <Typography className={classes.footer__text}>
            &copy; 2021 - Retrospective Toolkit
          </Typography>
          <div className={classes.grow} />
          <Typography className={classes.footer__text}>
            Developed by High Rollers
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Footer;
