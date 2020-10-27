import React, { useRef } from 'react';
import ReactDice from 'react-dice-complete';
import 'react-dice-complete/dist/react-dice-complete.css';


const DiceModel = (props) => {

  let reactDice = useRef(null); //Needed once more dice get added

  const rollAll = () => {
    reactDice.rollAll()
  }

  const rollDoneCallback = (num) => {
    props.result(num)
  }

    // Note: Default roll needs to be larger than the number of sides to not roll on page load
    return (
      <div>
        <ReactDice
          numDice={1}
          defaultRoll={7}
          rollDone={rollDoneCallback}
          ref={dice => reactDice = dice}
        />
      </div>
    )

}

export default DiceModel;