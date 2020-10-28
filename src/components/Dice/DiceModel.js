// This represents the dice themselves, the rolling, and the functionality needed to roll them.
import React from 'react';
import ReactDice from 'react-dice-complete';
import 'react-dice-complete/dist/react-dice-complete.css';
import Button from '@material-ui/core/Button'


const DiceModel = (props) => {

  let reactDice; 

  const rollAll = () => {
    reactDice.rollAll()
  }

  const rollDoneCallback = (num) => {
    props.result(num)
  }

  /**
   * To access rollAll, the button needs to exist with the dice. This is not ideal because now
   * the roll button is closely coupled with the dice.
   * TODO: Potentially find a workaround to decouple the button and dice
   */
  const rollButton = (
    <Button 
      variant="contained" 
      onClick={rollAll}
      color="secondary">
        Roll Dice
      </Button>
  )

    // Note: Default roll needs to be larger than the number of sides to not roll on page load
    return (
      <div className={props.css}>
        <ReactDice
          numDice={2}
          rollDone={rollDoneCallback}
          disableIndividual={false}
          defaultRoll={7}
          faceColor={"#EB0700"}
          dotColor={"#FFFFFF"}
          outline={true}
          ref={dice => reactDice = dice}
        />
        {rollButton}
      </div>
    )

}

export default DiceModel;