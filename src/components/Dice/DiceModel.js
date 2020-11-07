// This represents the dice themselves, the rolling, and the functionality needed to roll them.
import React from 'react';
import ReactDice from 'react-dice-complete';
import 'react-dice-complete/dist/react-dice-complete.css';
import Button from '@material-ui/core/Button'
import { useTheme } from '@material-ui/core/styles'
import PropTypes from 'prop-types'


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
      color="primary">
        Roll Dice
      </Button>
  )

  const theme = useTheme();


    // Note: Default roll needs to be larger than the number of sides to not roll on page load
    return (
      <div className={props.css}>
        <ReactDice
          numDice={2}
          rollDone={rollDoneCallback}
          disableIndividual={true}
          defaultRoll={7}
          faceColor={theme.palette.secondary.main}
          dotColor={"#FFFFFF"}
          outline={true}
          ref={dice => reactDice = dice}
        />
        <br></br>
        {rollButton}
      </div>
    )

}

DiceModel.propTypes = {
  result: PropTypes.func,
};

export default DiceModel;