/* eslint-disable @typescript-eslint/ban-types */
import React, { FC, useEffect, useRef, useState } from 'react';
import './search.css';
// import { Character } from '../../rickiMartyTypes';
import RenderCarts from 'components/carts/RenderCarts';

const Search: FC<{}> = () => {
  const [handleChange, setHandleChange] = useState<string>('');
  const [key, setKey] = useState<number>(0);
  const inputEl = useRef<HTMLInputElement | null>(null);
  inputEl.current?.focus();

  function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    setHandleChange(`${inputEl.current?.value}`);
    localStorage.setItem('valueInput', `${inputEl.current?.value}`);
    console.log('inputEl.current', inputEl.current?.value);
    console.log('handleChange', handleChange);
    console.log('localStorage', localStorage.getItem('valueInput'));
  }

  useEffect(() => {
    setKey(Math.random());
  }, [handleChange]);

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit} className="search">
          <label>
            <input
              placeholder={
                localStorage.getItem('valueInput')
                  ? `${localStorage.getItem('valueInput')}`
                  : 'search'
              }
              type="text"
              ref={inputEl}
              // value={handleChange}
              // onChange={(e) => setHandleChange(e.target.value)}
            />
          </label>
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
          <button type="submit" className="search-btn">
            search
          </button>
        </form>
      </div>
      <RenderCarts value={handleChange} key={key} />
    </>
  );
};

export default Search;
