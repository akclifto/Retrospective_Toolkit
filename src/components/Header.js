/**
 * Stateless component that displays the header for all of the landing pages.
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import PropTypes from "prop-types";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";
import SettingsApplicationsSharpIcon from '@material-ui/icons/SettingsApplicationsSharp';
import logo from '../resources/statefarmLogo.svg';

const useStyles = makeStyles((theme) => ({

  root: {
    boxShadow: '0px -5px 5px rgba(0,0,0,0.05)'
  },
  toolbar: {
    position: 'fixed',
    bottom: 'auto',
    top: 0,
    backgroundColor: 'whitesmoke',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    color: 'black',
    textDecoration: 'none',
  },
}));

/***
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
  children: PropTypes.element.isRequired,
};


const Header = (props) => {

  const classes = useStyles();

  return (

    <React.Fragment>
      <HideOnScroll {...props}>
        <AppBar className={classes.toolbar}>
          <Toolbar className={classes.root}>
            <Link to='/'>
              <img src={logo} alt="logo" />
            </Link>
            <div className={classes.grow} />
            <Link to='/login' className={classes.menuButton} >
              <Button>
                <SettingsApplicationsSharpIcon color="black" fontSize="large" />
                Login
            </Button>
            </Link>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  );
}

export default Header;
