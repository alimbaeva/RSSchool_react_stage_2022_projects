import React from 'react';
import { ActionType, Action, StateType } from './reduserTypes';

export const reducerSearch: React.Reducer<StateType, Action> = (state, action) => {
  switch (action.type) {
    case ActionType.ADDSEARCH:
      return {
        ...state,
        search: action.payload.search,
      };
    case ActionType.ADDFORMS:
      return {
        ...state,
        formCard: action.payload.formCard,
      };
    default:
      throw new Error();
  }
};
