import { configureStore } from '@reduxjs/toolkit';
import { reducerSearchData } from './slice';

const store = configureStore({
  reducer: {
    search: reducerSearchData,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export { store };
