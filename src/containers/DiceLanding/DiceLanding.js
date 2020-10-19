/**
 * This class will be used as a container component that holds the other components in the landing page
 */

//Imports
import React from 'react';
import Die from '../../components/Dice/Die';
import {sides as sidesConst, themes as themeConst, themes} from '../../constants/DieConstants'
import { makeStyles } from '@material-ui/core/styles';
import Header from '../../components/Header/Header'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.primary,
    backgroundColor: 'whitesmoke',
  },
}));


//Returns a landing page for the Dice Game
const DiceLanding = () => {
const classes = useStyles();

  return (
    
    <div className={classes.root} >
        <Header/>
        {/** Creates a Die object, contains variable properties*/}
        <Die 
          numSides={sidesConst.SIX.sides}
          title={themeConst.Action}
        />
    </div>
  );
}

export default DiceLanding;
