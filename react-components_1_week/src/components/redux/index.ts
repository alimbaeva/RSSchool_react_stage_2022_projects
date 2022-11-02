import { configureStore } from '@reduxjs/toolkit';
import { reducerSearchData, reducerCerdForm } from './slice';

const store = configureStore({
  reducer: {
    search: reducerSearchData,
    creadCard: reducerCerdForm,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export { store };
