Using Context

So React Context is used almost like a mini database.  So instead of passing props between objects, we set the context at our top level component and every component below it can access the contents of context.

In our case, we could use context to hold the game state of each person in the "lobby."  Whenever you roll the dice, we could write to a "lobbyNumber" context, with a userName dicestate.  We could then have a component that displays the renders "lobbyNumber" context and each userName's state in it (except the players screen we are on).  In this way as other people rolled dice, we could render them on the screen.  Example of context below.

```javascript
import { createContext, useState } from "react";

const ({ lobbyNumber, userDiceState }) = useState(undefined);

DiceDataContext = createContext({ lobbyNumber, userDiceState });

const DiceDataContextProvider = ({ children }) => {
    return (
        <DiceDataContext.Provider value={{ lobbyNumber, userDiceState }}
            {...children}
        </DiceDataContext.Provider>
        );
};

export { DiceDataContext, DiceDataContextProvider };
```


