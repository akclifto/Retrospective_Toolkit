/**
 * This represents a card that the dice and the button handler will live on.
 */

//Imports
import React, { useState , useRef } from 'react';
import PropTypes from 'prop-types';
import classes from '../../styles/Die.module.css';
import Card from '@material-ui/core/Card';
import DiceModel from './DiceModel';

const Die = (props) => {
    //diceResult will rerender the DOM when it is updated
    const [diceResult, setDiceResult] = useState(0);
    const textRef = useRef("This die has " + props.numSides + " sides and is an " + props.title + " die.")

    //Pass the reference to this function to DieModel.js
    const updateResult = (rollResult) => {
      setDiceResult(rollResult);
    };

    if (diceResult !== 0) {
      textRef.current = "You rolled a " + diceResult + "!"; 
    }

    //Returns JSX to DiceLanding
    return (
      <Card className={classes.Die}>
        <p>
          {textRef.current}
          </p>
        <DiceModel
          result={updateResult}
          css={classes.Die}
          />
      </Card>
    )
}


/**
 * "Strict typing" of the properties that this function will need
 * This mainly affects things like DiceLanding.js that pass in 
 * title, numSides, and roll.
 */
Die.propTypes = {
  title: PropTypes.string,
  numSides: PropTypes.number,
};

export default Die;

