/**
 * This class will be used as a container component that holds the other components in the landing page
 */

// Imports
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
// import Die from "../components/Dice/Die";
import InfoCard from "../components/InfoCard";
import ThreeDice from "../components/ThreeDice/ThreeDice";

// eslint-disable-next-line no-unused-vars
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "5px",
  },
}));

// Directs the browser to statefarm for more information in new tab.
const redirect = (e) => {
  e.preventDefault();
  const url = "http://statefarm.com";
  window.open(url, "_blank");
};

// Returns a landing page for the Dice Game
const DiceLanding = () => {
  // TODO: Have the project call the DieConstants initDiceImages only ONCE and figure out a solution for
  // getting the dice array in the project. Passing it around as props, starting from DiceLanding seems the easiest option..

  const classes = useStyles();

  return (
    <Grid
      className={classes.root}
      container
      direction="row"
      justify="center"
      alignItems="center"
    >
      <Grid item xs={5}>
        <InfoCard
          title="Cube Game"
          body="This cube game is intended to promote communication and understanding within a team."
          body2="How To Play:"
          body3="First, choose an action dice, then roll it. It will roll on a side with a picture. 
              Describe how the picture relates to an experience in software development you have had."
          clicked={redirect}
        />
      </Grid>

      {/** Creates a Die object, contains variable properties */}
      <Grid item xs={5}>
        <div className={classes.dice}>
          {/* <Die numSides={sidesConst.SIX.sides} title={diceArray.Action} /> */}
        </div>
      </Grid>
      <Grid item xs={12}>
        <ThreeDice />
      </Grid>
    </Grid>
  );
};

export default DiceLanding;
