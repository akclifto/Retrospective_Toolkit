/**
 * This class will be used as a container component that holds the other components in the landing page
 */

// Imports
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import InfoCard from "../components/InfoCard";
import ThreeDice from "../components/ThreeDice/ThreeDice";
import getUniqueName from "../components/Connector";

// eslint-disable-next-line no-unused-vars
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "1px",
  },
}));

const generateURL = () => {
  // eslint-disable-next-line
  console.log(getUniqueName());
};

// Returns a landing page for the Dice Game
const DiceLanding = () => {
  const classes = useStyles();

  return (
    <div>
      <Grid className={classes.root} container direction="row" spacing={6}>
        <Grid item xs={8}>
          <InfoCard
            title="Cube Game"
            body="This cube game is intended to promote communication and understanding within a team."
            body2="How To Play: Click 'Start Game' to roll the dice!"
            body3="Each die will land on a random picture. 
            Describe how the picture relates to an experience you had in software development.
            To re-roll all die, click the 'Roll It!' button, to re-roll one die, click on a single die to re-roll."
          />
        </Grid>
        <Grid item xs={4}>
          <InfoCard
            title="Share Board"
            body="If you want to share your board with others:"
            body2="Click the 'Generate URL' button and give it to someone else to put in their browser"
            buttonName="Generate URL"
            buttonOnClick={generateURL}
          />
        </Grid>
        <Grid item xs={12}>
          <ThreeDice />
        </Grid>
      </Grid>
    </div>
  );
};

export default DiceLanding;
