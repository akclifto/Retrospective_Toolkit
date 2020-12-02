import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const Oops = "https://d1g31diwtzkeb3.cloudfront.net/404.gif";
const useStyles = makeStyles(() => ({
  root: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    padding: "10px",
  },
  img: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "40%",
    maxWidth: "50%",
    borderRadius: "8%",
  },
  header: {
    textAlign: "center",
  },
  body: {
    color: "black",
    textAlign: "center",
  },
  goHome: {
    fontSize: "1.5rem",
    textDecoration: "none",
    color: "white",
  },
  button: {
    textDecoration: "none",
    background: "#d10c0c",
    border: "none",
    transition: "transform 0.2s",
    "&:hover": {
      background: "#9e0c0c",
      transform: "scale(1.08)",
    },
  },
}));

const PageNotFound = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img className={classes.img} src={Oops} alt="Oops! Page Not Found" />
      <h1 className={classes.header}>404! Oops...</h1>
      <div className={classes.body}>
        <h2>The page you are looking for doesn&apos;t exist!</h2>
        <Button className={classes.button}>
          <Link className={classes.goHome} to="/">
            Go Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default PageNotFound;
