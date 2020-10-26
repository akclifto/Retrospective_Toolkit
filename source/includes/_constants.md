# Constants

This folder contains any javascript files which define constants for the application.

## DieConstants.js

> Notable props:

```javascript
const dieSides = {
  FOUR: {
    sides: 4,
    chance: 1 / 4,
  },
  SIX: {
    sides: 6,
    chance: 1 / 6,
  },
  EIGHT: {
    sides: 8,
    chance: 1 / 8,
  },
  TEN: {
    sides: 10,
    chance: 1 / 10,
  },
  TWELVE: {
    sides: 12,
    chance: 1 / 12,
  },
  TWENTY: {
    sides: 20,
    chance: 1 / 20,
  }
}

const dieThemes = {
  Action: 'Action'
}
```

This file contains the information which tell our dice how many sizes they have, the value of the sides, as well as the themes which are available for the dice.