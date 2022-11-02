import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
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

const { actions: actionsSearchData, reducer: reducerSearchData } = searchDatasInput;
// console.log('reducerSearchData', reducerSearchData);
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const searchState = (state: RootState) => state.search;

export { actionsSearchData, reducerSearchData };
