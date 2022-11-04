import { createContext } from 'react';
import { StateType, Action } from '../reduser/reduserTypes';
type InitialType = {
  state: StateType;
  dispatch: (el: Action) => void;
};

const initial: InitialType = {
  state: {
    search: {
      page: 1,
      name: '',
      status: '',
      gender: '',
    },
    formCard: [],
  },
  dispatch: () => null,
};

export const UserContext = createContext(initial);
