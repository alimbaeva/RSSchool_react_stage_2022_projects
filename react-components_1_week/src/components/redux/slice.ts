import { createSlice } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import type { RootState } from './index';

export type Search = {
  page: number;
  name: string;
  status: string;
  gender: string;
};

export interface SearchType {
  search?: Search;
}
export const initialSearch: SearchType = {
  search: {
    page: 1,
    name: '',
    status: '',
    gender: '',
  },
};

export type formCard = {
  firstName: string;
  lname: string;
  dateDelivery: string;
  myfile: string;
  email: string;
  sex: string;
  errors?: string;
};
export interface CreateCardType {
  cardForm: formCard[];
}

export const initialCreateCard: CreateCardType = {
  cardForm: [],
};

const searchDatasInput = createSlice({
  name: 'search',
  initialState: initialSearch,
  reducers: {
    searchData(state, actions) {
      return {
        ...state,
        search: actions.payload.search,
      };
    },
  },
});

const createCerdForm = createSlice({
  name: 'creadCard',
  initialState: initialCreateCard,
  reducers: {
    createDataCard(state, actions) {
      state.cardForm = [actions.payload, ...state.cardForm];
    },
  },
});

const { actions: actionsSearchData, reducer: reducerSearchData } = searchDatasInput;
const { actions: actionsCerdForm, reducer: reducerCerdForm } = createCerdForm;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const searchState = (state: RootState) => state.search;
export const useAppSelectorForm: TypedUseSelectorHook<RootState> = useSelector;
export const createState = (state: RootState) => state.creadCard;

export { actionsSearchData, reducerSearchData, actionsCerdForm, reducerCerdForm };
