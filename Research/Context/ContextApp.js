import React from 'react';
import Navigation from './Navigation';
import UserContext from './ContextUser';

const user = {
  name: 'Dummy',
  favorites: [
    'hardcodedItem1',
    'hardcodedItem2'
  ]
}

function App() {
  return (
    <UserContext.Provider value={user}>
      <Navigation />
      <SaladMaker />
    </UserContext.Provider>
  );
}

export default App;
