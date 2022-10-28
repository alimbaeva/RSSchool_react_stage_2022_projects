/* eslint-disable @typescript-eslint/ban-types */
import React, { FC, useEffect, useRef, useState, useContext, useReducer } from 'react';
import './search.css';
import RenderCarts from 'components/carts/RenderCarts';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';
import { CardSort, ActionTypeForm, StateForm } from 'Types';

const Search: FC<{}> = () => {
  const { dataSearch, set } = useContext(UserContext);
  const { register, handleSubmit } = useForm<CardSort>();
  const [key, setKey] = useState<number>(0);
  const inputEl = useRef<HTMLInputElement | null>(null);

  inputEl.current?.focus();

  const onSubmit = (data: CardSort) => {
    console.log(data.name, data.gender, data.status);
    set(['1', data.name, data.status, data.gender]);
  };

  const resetAll = () => {
    console.log('resetAll');
  };

  useEffect(() => {
    setKey(Math.random());
  }, [dataSearch]);

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)} className="sort-card">
          <label htmlFor="name">
            Name:
            <input data-testid="name" {...register('name')} />
          </label>
          <label htmlFor="status">
            Status:
            <select data-testid="status" {...register('status')}>
              <option value=""></option>
              <option value="alive">alive</option>
              <option value="dead">dead</option>
              <option value="unknown">unknown</option>
            </select>
          </label>
          <label htmlFor="gender">
            Gender:
            <select data-testid="gender" {...register('gender')}>
              <option value=""></option>
              <option value="female">female</option>
              <option value="male">male</option>
              <option value="genderless">Genderless</option>
              <option value="unknown">Unknown</option>
            </select>
          </label>
          <div className="block-form_item">
            <button className="btn-sort" type="submit" value="Submit" data-testid="submit-sort">
              search
            </button>
            <button onClick={resetAll} className="btn-sort" type="reset" data-testid="reset-sort">
              reset
            </button>
          </div>
        </form>
      </div>
      <RenderCarts key={key} />
    </>
  );
};

export default Search;
