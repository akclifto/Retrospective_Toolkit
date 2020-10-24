import React, { useRef } from 'react'
import ReactDice from 'react-dice-complete'
import 'react-dice-complete/dist/react-dice-complete.css'


const DiceModel = (props) => {

  let reactDice = useRef(null);

  const rollAll = () => {
    this.reactDice.rollAll()
  }

  const rollDoneCallback = (num) => {
    console.log(`You rolled a ${num} [DICEMODEL]`);
    props.result(num)
  }

    return (
      <div>
        <ReactDice
          numDice={1}
          defaultRoll={7} //Needs to be larger than the number of sides to not roll on page load
          rollDone={rollDoneCallback}
          ref={dice => reactDice = dice}
        />
      </div>
    )

}

export default DiceModel;