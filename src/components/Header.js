/**
 * Stateless component that displays the header for all of the landing pages.
 */


import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Toolbar } from '@material-ui/core';
import logo from '../resources/statefarmLogo.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: '10px',
    paddingBottom: '10px',
  },
  title: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'flex-end',
    color: 'red',
    fontWeight: "bold",
    marginRight: theme.spacing(2),
  },

  toolbar: {
    color: 'black',
    background: 'whitesmoke',
  },
  menuButton: {
  },
  image: {
    height: '6vmin',
    paddingBottom: '1vmin',
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.toolbar}>
        <Toolbar>
          <img src={logo} className={classes.image} alt="logo" />
          <Typography variant ="h5" className={classes.title}>
            RETROSPECTIVE TOOLKIT
          </Typography>
          <Typography variant="span" className={classes.title} >
            Developed by High Rollers
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  )

}

export default Header;