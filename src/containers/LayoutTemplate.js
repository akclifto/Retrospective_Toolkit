import React from "react";
import { makeStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import Header from "../components/Header";
import Footer from "../components/Footer";

const useStyles = makeStyles(() => ({
  template: {
    minHeight: "100vh",
  },
}));

const LayoutTemplate = (props) => {
  const classes = useStyles();
  const { children } = props;

  return (
    <div className={classes.template}>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};
LayoutTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutTemplate;
