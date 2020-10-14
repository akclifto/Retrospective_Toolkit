
import React from 'react';
import Emoji from '../../components/Emoji';
import logo from '../../resources/statefarmLogo.svg'
import landing from './DiceLanding.css'
import Die from '../../components/Dice/Die';


const DiceLanding = () => {

  return (
    <div className="Landing">
      <header className="Landing-header">
      <img src={logo} className="App-logo" alt="logo" />
        <div>
          Job's done, boss. 
            <Emoji
                symbol="🐑"
                label="sheep"
            />
        </div>
        <Die 
          numSides={6}
          title="Actions"
        />

      </header>
    </div>
  );
}

export default DiceLanding;
