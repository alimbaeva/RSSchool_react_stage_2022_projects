import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Character } from '../../../rickiMartyTypes';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from 'components/redux';

export type Search = {
  page: number;
  name: string | undefined;
  status: string | undefined;
  gender: string | undefined;
};

export interface Init {
  dataCards: Character[];
  allPages: null | number;
  loading: boolean;
  error: boolean | null | string;
}

const init: Init = {
  dataCards: [],
  allPages: 1,
  loading: true,
  error: null,
};

interface PromiseObjData {
  dataCards: Character[];
  allPages: number;
}

export const getData = createAsyncThunk<PromiseObjData, Search, { rejectValue: string }>(
  'getCards/getData',
  async (searchItems, { rejectWithValue }) => {
    try {
      const res = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${searchItems.page}&name=${searchItems.name}&status=${searchItems.status}&gender=${searchItems.gender}`
      );
      if (!res.ok) {
        throw new Error('Server Error');
      }
      const data = res.json();
      const dataObj: Promise<PromiseObjData> = data.then((el) => {
        return { dataCards: el.results, allPages: el.info.pages };
      });

      return dataObj;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

const getDataCards = createSlice({
  name: 'getCards',
  initialState: init,
  reducers: {},
  extraReducers: function (builder) {
    builder
      .addCase(getData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getData.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.allPages = action.payload.allPages;
        state.dataCards = action.payload.dataCards;
      })
      .addCase(getData.rejected, (state) => {
        state.loading = false;
        state.error = 'Ощибка';
      });
  },
});

const { actions: actionsGetDataCards, reducer: reducerGetDataCards } = getDataCards;

export const getDataCardsSelector: TypedUseSelectorHook<RootState> = useSelector;
export const getCardsState = (state: RootState) => state.getCards;

export { actionsGetDataCards, reducerGetDataCards };
