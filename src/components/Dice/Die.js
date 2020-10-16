/**
 * Represents a die that makes a call to a server via a button.
 */

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import dieImage from '../../resources/volleyball.svg'
import classes from './Die.module.css';


const Die = (props) => {
    const assignedClasses = [];
    const [counter, setCounter] = useState(0);

    useEffect(() => {
      //HTTP request
      return () => {
      alert('Rolling somewhere else...');
      }
    }, [counter])
    
    let btnClass = '';

    if (props.showPersons) {
      btnClass = '';
    }

    if (counter === 1) {
      assignedClasses.push(classes.red); //assignedClasses = ['bold', 'red']
 
    } if (counter >= 2) {
      assignedClasses.push(classes.bold); //assignedClasses = ['bold']
      
    }

    return (
      <div>
        <img src={dieImage} alt="Dice" />
        <p 
          className={assignedClasses.join(' ')}>
            This die has {props.numSides} sides and is an {props.title} die. 
          </p>
        <button 
          onClick={() => setCounter(counter + 1)}
          className = {btnClass}
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

