/**
 * This class will be used as a container component that holds the other components in the landing page
 */

/* eslint-disable no-console */
// Imports
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import InfoCard from "../components/InfoCard";
import ThreeDice from "../components/ThreeDice/ThreeDice";
import { getUniqueName, connect } from "../components/Connector";

let firstTime;
let socket;
const roomId = getUniqueName();

// eslint-disable-next-line no-unused-vars
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "1px",
  },
}));

const generateURL = () => {
  // eslint-disable-next-line
  console.log(`CLIENT SIDE NAME: ${roomId}`);
  if (!firstTime) {
    firstTime = true;
    socket = connect(roomId);
  }
  socket.emit("talk", "Sent a message from client");
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
          <InfoCard
            title="Join Board"
            body="If you want to join someone else's board:"
            body2="Type in their code in the field and click 'Join Game!'"
            buttonName="Join Game"
            // buttonOnClick={joinGame}
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
