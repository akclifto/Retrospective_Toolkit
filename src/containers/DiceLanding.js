/**
 * This class will be used as a container component that holds the other components in the landing page
 */

// Imports
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import InfoCard from "../components/InfoCard";
import ThreeDice from "../components/ThreeDice/ThreeDice";

// eslint-disable-next-line no-unused-vars
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "1px",
  },
}));

// Returns a landing page for the Dice Game
const DiceLanding = (props) => {
  const { socket, roomId, gameStatus } = props;
  const classes = useStyles();

  return (
    <div>
      <Grid className={classes.root} container direction="row">
        <Grid item xs={12}>
          <InfoCard
            title="Cube Game"
            body="This cube game is intended to promote communication and understanding within a team."
            body2="How To Play: Click 'Start Game' to roll the dice!"
            body3="Each die will land on a random picture. 
            Describe how the picture relates to an experience you had in software development.
            To re-roll all die, click the 'Roll It!' button, to re-roll one die, click on a single die to re-roll."
          />
        </Grid>
        <Grid item xs={12}>
          <ThreeDice socket={socket} roomId={roomId} gameStatus={gameStatus} />
        </Grid>
      </Grid>
    </div>
  );
};
DiceLanding.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  socket: PropTypes.object.isRequired,
  roomId: PropTypes.string.isRequired,
  gameStatus: PropTypes.bool.isRequired,
};

export default DiceLanding;
