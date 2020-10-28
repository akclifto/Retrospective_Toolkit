// import React, { useRef } from 'react';
// import ReactDice from 'react-dice-complete';
// import 'react-dice-complete/dist/react-dice-complete.css';
// import Button from '@material-ui/core/Button'


// const DiceModel = (props) => {

//   let reactDice; //Needed once more dice get added

//   const rollAll = () => {
//     reactDice.rollAll()
//   }

//   const rollDoneCallback = (num) => {
//     props.result(num)
//   }

//     // Note: Default roll needs to be larger than the number of sides to not roll on page load
//     return (
//       <div>
//         <ReactDice
//           numDice={2}
//           getDefault={-1}
//           rollDone={rollDoneCallback}
//           faceColor={"#EB0700"}
//           dotColor={"#FFFFFF"}
//           outline={true}
//           ref={dice => reactDice = dice}
//         />
//         <Button onclick={rollAll}> button </Button>
//       </div>
//     )

// }

// export default DiceModel;