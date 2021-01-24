/**
 * This class will be used as a container component that holds the other components in the landing page
 */

//Imports
import React from 'react';
import Die from '../components/Dice/Die';
import ThemeCard from '../components/ThemeCard';
import { sides as sidesConst, themes as themeConst } from '../constants/DieConstants';
import { makeStyles } from '@material-ui/core/styles';
import InfoCard from '../components/InfoCard';
import ThreeDice from '../components/ThreeDice/ThreeDice'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'


// eslint-disable-next-line no-unused-vars
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: '5px'
  },
}));

//Directs the browser to statefarm for more information in new tab.
const redirect = (e) => {
  e.preventDefault();
  const url = "http://statefarm.com";
  window.open(url, '_blank');
}


//Returns a landing page for the Dice Game
const DiceLanding = () => {
  const classes = useStyles();

  //TODO:Rerolls the dice
  const reRoll = () => {
    return true;
  }
  
  //TODO: create dynamic theme swithcing
  const diceTheme =  themeConst.action;
  
  const rollButton = (
    <Button 
      variant="contained" 
      color="primary">
        Roll Dice
      </Button>
  )

  //TODO: Dynamically change which image is loaded (which image is determined by the roll)
  //Currently does not work with rawgit CDN...because reasons
  const rollResult = (
    [
        'https://d1g31diwtzkeb3.cloudfront.net/Dice/Themes/Action/brush-24px.svg',
        'https://d1g31diwtzkeb3.cloudfront.net/Dice/Themes/Action/directions_run-24px.svg',
        'https://d1g31diwtzkeb3.cloudfront.net/Dice/Themes/Action/directions_walk-24px.svg',
        'https://d1g31diwtzkeb3.cloudfront.net/Dice/Themes/Action/edit-black-18dp.svg',
        'https://d1g31diwtzkeb3.cloudfront.net/Dice/Themes/Action/alt_route-24px.svg',
        'https://d1g31diwtzkeb3.cloudfront.net/Dice/Themes/Action/emoji_objects-24px.svg'
    ]
  )


  return (
    <Grid container >
      <Grid className={classes.root} 
        container xs={10} direction="row" justify="center" alignItems="center">
        <Grid item xs={4}>
          <InfoCard
            title="Cube Game"
            body="This cube game is intended to promote communication and understanding within a team."
            body2="How To Play:"
            body3="First, choose an action dice, then roll it. It will roll on a side with a picture. 
              Describe how the picture relates to an experience in software development you have had."
            clicked={redirect}
            buttonText="Learn More"
          />
        </Grid>

        {/** Creates a Die object, contains variable properties*/}
        <Grid item xs={3}>
          <div className={classes.dice}>
            <Die
              numSides={sidesConst.SIX.sides}
              rollButton={rollButton}
              results={rollResult}
            />
          </div>
      </Grid>
      <Grid item xs={10}>
        <ThreeDice 
          rollButton = {rollButton}
          theme = {diceTheme}
        />
      </Grid>
    </Grid>
    <Grid 
      container xs={2} className={classes.root} >
          <Grid item >
            <div className={classes.dice}>
              <ThemeCard
                theme={diceTheme}
              />
            </div>
        </Grid>

      </Grid>

  </Grid>
  );
}

export default DiceLanding;
