/* eslint-disable @typescript-eslint/ban-types */
import React, { FC, useEffect, useRef, useState, useReducer } from 'react';
import './search.css';
import RenderCarts from 'components/carts/RenderCarts';
import { useForm } from 'react-hook-form';
import { CardSort, ActionTypeForm, StateForm } from 'Types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function init(state: any) {
  return { ...state };
}

function reduser(state: StateForm, action: StateForm) {
  switch (action.type) {
    case ActionTypeForm.DATA:
      return {
        ...action,
      };
    default:
      return state;
  }
}

const Search: FC<{}> = () => {
  const { register, handleSubmit } = useForm<CardSort>();
  const [key, setKey] = useState<number>(0);
  const inputEl = useRef<HTMLInputElement | null>(null);
  const [data, dispatch] = useReducer(
    reduser,
    {
      type: '',
      page: 1,
      name: 'sss',
      gender: 'ssss',
      status: '',
    },
    init
  );

  inputEl.current?.focus();

  const onSubmit = (data: CardSort) => {
    console.log(data.name, data.gender, data.status);
    dispatch({
      type: 'DATA',
      page: 1,
      name: data.name,
      status: data.status,
      gender: data.gender,
    });
  };
  console.log('====', data);
  const resetAll = () => {
    console.log('resetAll');
  };

  useEffect(() => {
    setKey(Math.random());
  }, [data]);

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
