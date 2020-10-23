/**
 * Represents a die that makes a call to a server via a button.
 */

//Imports
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classes from './Die.module.css';
import Emoji from '../Emoji'
import Card from '@material-ui/core/Card';


const Die = (props) => {
    const assignedClasses = []; //Holds variable CSS classes to apply to a <p> tag
    const [counter, setCounter] = useState(0); // Sets initial counter state to 0

    //Will only occur when counter is changed. 
    // TODO: Move to onClick alert, causes any link off page to create alert
    useEffect(() => {
      //HTTP request
      return () => {
      // alert('Rolling somewhere else...');
      console.log("Rolling somewhere else...");
      }
    }, [counter]) //If [counter] was [] instead, useEffect would occur at first render.
    

    //Each if statement is called each render cycle. 
    if (counter >= 1) {
      assignedClasses.push(classes.red); //assignedClasses = ['bold', 'red']
    }
    if (counter >= 2) {
      assignedClasses.push(classes.bold); //assignedClasses = ['bold']
    }
    if (counter >= 3) {
      assignedClasses.push(classes.large)
    }

    //Increments counter by 1.
    const incrementCounter = () => {
      //setCounter(count + 1) doesn't update the value of count until after the render is done
      setCounter(prevCounter => prevCounter +1)
    }

    //Returns JSX to DiceLanding
    return (
      //Ensures the button inherits the .Button properties from Die.module.css
      //All buttons in this div would be CSS'd the same way
      <Card className={classes.Die}>
        <Emoji label="dice" symbol="🎲"></Emoji>
        <p 
          className={assignedClasses.join(' ')}>
            This die has {props.numSides} sides and is an {props.title} die. 
          </p>
        <button 
          onClick={() => incrementCounter}
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

