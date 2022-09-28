import React from 'react';
import { Carts } from 'components/carts/Carts';
import { carts } from 'data/dataCart';

function App() {
  return (
    <div className="App">
      <Carts carts={carts[0]} />
    </div>
  );
}

export default App;
