/**
 * Represents a die that makes a call to a server via a button.
 */

//Imports
import React, { useState , useRef } from 'react';
import PropTypes from 'prop-types';
import classes from '../../styles/Die.module.css';
import Card from '@material-ui/core/Card';
import DiceModel from './DiceModel';
import Button from '@material-ui/core/Button'
import ReactDice from 'react-dice-complete';
import 'react-dice-complete/dist/react-dice-complete.css';


const Die = (props) => {
    const [diceResult, setDiceResult] = useState(0);
    const textRef = useRef("This die has " + props.numSides + " sides and is an " + props.title + " die.")
    let reactDice = useRef(null); //Needed once more dice get added

    //Pass the reference to this function to DieModel.js
    const updateResult = (rollResult) => {
      setDiceResult(rollResult);
    };

    const rollAll = () => {
      reactDice.rollAll();
    }

    if (diceResult !== 0) {
      textRef.current = "You rolled a " + diceResult + "!"; 
    }

    //Returns JSX to DiceLanding
    //Ensures the button inherits the .Button properties from Die.module.css
    //All buttons in this div would be CSS'd the same way
    // onClick={() => rollDice(props.numSides)} //TODO: implement the button to roll the dice
    return (
      <Card className={classes.Die}>
        <ReactDice
          numDice={2}
          rollDone={updateResult}
          disableIndividual={false}
          defaultRoll={7}
          faceColor={"#EB0700"}
          dotColor={"#FFFFFF"}
          outline={true}
          ref={dice => reactDice = dice}
          />
        <p>
            {textRef.current}
          </p>
          <Button 
            variant="contained" 
            onClick={rollAll}
            color="secondary">
              Roll Dice
            </Button>
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

