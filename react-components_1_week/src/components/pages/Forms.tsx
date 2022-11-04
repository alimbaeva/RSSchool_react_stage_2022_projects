import { UserContext } from 'components/context/UseContext';
import { reducerSearch } from 'components/reduser/Reduser';
import { Action, initialStateSearch, StateType } from 'components/reduser/reduserTypes';
import React, { FC } from 'react';
import FormsData from './FormsData';
import './style/forms.css';

const Forms: FC = () => {
  document.title = `React Component RS/Form`;
  const [state, dispatch] = React.useReducer<React.Reducer<StateType, Action>>(
    reducerSearch,
    initialStateSearch
  );
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <div className="container">
        <h2>Forms</h2>
        <div className="form-cart-block">
          <FormsData />
        </div>
      </div>
    </UserContext.Provider>
  );
};

export default Forms;
