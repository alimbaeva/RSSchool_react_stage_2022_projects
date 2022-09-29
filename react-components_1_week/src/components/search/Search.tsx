import React, { ReactElement } from 'react';
import './search.css';

export function Search(): ReactElement {
  let valueInput = '';
  const valueInputLS = localStorage.getItem('valueInput');
  return (
    <div className="container">
      <div className="search">
        <input
          type="text"
          value={valueInputLS ? valueInputLS : ''}
          onChange={(e) => (valueInput = e.target.value)}
        />
        <div className="img-search" onClick={() => localStorage.setItem('valueInput', valueInput)}>
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
        <button
          className="search-btn"
          onClick={() => localStorage.setItem('valueInput', valueInput)}
        >
          search
        </button>
      </div>
    </div>
  );
}
