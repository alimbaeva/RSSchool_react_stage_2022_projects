/* eslint-disable @typescript-eslint/ban-types */
import React, { FC, useEffect, useRef, useState, useContext } from 'react';
import './search.css';
import RenderCarts from 'components/carts/RenderCarts';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';
import { CardSort } from 'Types';
import { reducerSearch } from '../reduser/Reduser';
import { initialStateSearch, StateType, Action, ActionType } from '../reduser/reduserTypes';

// const enum ActionType {
//   ADDSEARCH = 'ADDSEARCH',
// }

// interface StateType {
//   name: string;
//   status: string;
//   gender: string;
// }

// interface Action {
//   type: ActionType;
//   payload: {
//     name: string;
//     status: string;
//     gender: string;
//   };
// }

// const initialState: StateType = {
//   name: '',
//   status: '',
//   gender: '',
// };

// const reducer: React.Reducer<StateType, Action> = (state, action) => {
//   switch (action.type) {
//     case ActionType.ADDSEARCH:
//       return {
//         ...state,
//         name: action.payload.name,
//         status: action.payload.status,
//         gender: action.payload.gender,
//       };
//     default:
//       throw new Error();
//   }
// };

const Search: FC<{}> = () => {
  const { dataSearch, set } = useContext(UserContext);
  const { register, handleSubmit } = useForm<CardSort>();
  const [key, setKey] = useState<number>(0);
  const inputEl = useRef<HTMLInputElement | null>(null);

  const [state, dispatch] = React.useReducer<React.Reducer<StateType, Action>>(
    reducerSearch,
    initialStateSearch
  );

  inputEl.current?.focus();

  const onSubmit = (data: CardSort) => {
    // console.log(data.name, data.gender, data.status);
    set(['1', data.name, data.status, data.gender]);
    dispatch({
      type: ActionType.ADDSEARCH,
      payload: {
        search: {
          name: data.name,
          status: data.status,
          gender: data.gender,
        },
      },
    });
  };

  const resetAll = () => {
    console.log('resetAll');
  };

  console.log('state-dispach', state);

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
