/**
 * This represents a card that the dice and the button handler will live on.
 */

//Imports
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
  results: {
    display: 'flex',
    boxShadow: '0 4px 8px rgba(0,0,0,0.15)',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    padding: '10px',
    alignItems: 'center',
    justifyContent: 'space-around',
    textAlign: 'center',
    height: '250px',
    boxShadow: 
      '0 1px 3px rgba(0,0,0,0.12)',
    transition: "all 0.3s cubic-bezier(.25,.8,.25,1)",
    '&:hover': {
      boxShadow: '0 10px 13px rgba(0,0,0,0.25)'
    }
  } 
});

const parseResults = (resultsArr) => {

  return (
    resultsArr.map((image, key) => (
      <img src={image} alt="Roll Result"/>
    ))
  )
}

const Die = (props) => {
    const dieClass = useStyles();
    //diceResult will rerender the DOM when it is updated
    const displayText = "Rolled Pictures";

    //Returns JSX to DiceLanding
    return (
      <Card className={dieClass.card} variant="outlined">
        <Typography variant="h4">
          {displayText}
          </Typography>

        <div className={dieClass.results}>
          {parseResults(props.results)}
        </div>

          {props.rollButton}
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

