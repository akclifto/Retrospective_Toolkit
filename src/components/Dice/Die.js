/**
 * Represents a die that makes a call to a server via a button.
 */

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import dieImage from '../../resources/volleyball.svg'
import classes from './Die.css';

const Die = (props) => {
    const assignedClasses = [];
    const [counter, setCounter] = useState(0);
    const buttonStyle = {
          border: '1px solid black',
          padding: '16px',
          backgroundColor: 'darkgreen',
          font: 'inherit',
          color: 'white',
          cursor: 'pointer'
    };

    useEffect(() => {
      //HTTP request
      return () => {
      alert('Rolling somewhere else...');
      }
    }, [counter])
  

    if (counter === 1) {
      assignedClasses.push(classes.red); //assignedClasses = ['bold', 'red']
 
    } else if (counter >= 2) {
      assignedClasses.push(classes.bold); //assignedClasses = ['bold']
      
    }

    return (
      <div>
        <img className="Die" src={dieImage} alt="Dice" />
        <p 
          className={assignedClasses.join(' ')}>
            This die has {props.numSides} sides and is an {props.title} die. 
          </p>
        <button 
          style={buttonStyle}
          onClick={() => setCounter(counter + 1)}
          >
          Send Message to Server (no server exists yet)
        </button>
      </div>
    )

}

Die.propTypes = {
  title: PropTypes.string,
  numSides: PropTypes.number,
  roll: PropTypes.func,
};

export default Die;

