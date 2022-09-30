import React from 'react';
import { RenderCarts } from 'components/carts/RenderCarts';
import Search from 'components/search/Search';
import './app.css';

function App() {
  return (
    <div className="App">
      <Search />
      <RenderCarts />
    </div>
  );
}

export default App;
