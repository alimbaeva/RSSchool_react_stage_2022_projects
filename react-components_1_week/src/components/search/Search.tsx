import React from 'react';
import './search.css';

export function Search() {
  return (
    <div className="container">
      <div className="search">
        <input type="text" placeholder="search" />
        <div className="img-search">
          <img
            className="img-search__search"
            src="https://i.ibb.co/Vvy864S/search.png"
            alt="search"
          />
          <img
            className="img-search__close"
            src="https://i.ibb.co/CMChtYx/close-2.png"
            alt="close-2"
          />
        </div>
        <button className="search-btn">search</button>
      </div>
    </div>
  );
}
