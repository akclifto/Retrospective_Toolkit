/**
 * This class will be used as a container component that holds the other components in the landing page
 */

//Imports
import React from 'react';
import Emoji from '../../components/Emoji';
import logo from '../../resources/statefarmLogo.svg'
import landingPage from './DiceLanding.module.css'
import Die from '../../components/Dice/Die';
import {sides as sidesConst, themes as themeConst} from '../../constants/DieConstants'


//Returns a landing page for the Dice Game
const DiceLanding = () => {

  return (
    
    <div className={landingPage.landing}>
      
      <header className={landingPage.landingHeader}>
      <img src={logo} className={landingPage.appLogo} alt="logo" />
        {/** Creates a Die object, contains variable properties*/}
        <Die 
          numSides={sidesConst.SIX.sides}
          title={themeConst.Action}
        />

      </header>
    </div>
  );
}

export default DiceLanding;
