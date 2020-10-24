/**
 * Represents a die that makes a call to a server via a button.
 */

//Imports
import React, { useEffect, useState , useRef } from 'react';
import PropTypes from 'prop-types';
import classes from '../../styles/Die.module.css';
import Card from '@material-ui/core/Card';
import DiceModel from './DiceModel';


const Die = (props) => {
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
      //Ensures the button inherits the .Button properties from Die.module.css
      //All buttons in this div would be CSS'd the same way
      <Card className={classes.Die}>
        <DiceModel 
        result={updateResult}
          />
        <p>
            {textRef.current}
          </p>
        <button 
          // onClick={() => rollDice(props.numSides)} //TODO: implement the button to roll the dice
          >
          Roll This Die
        </button>
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

