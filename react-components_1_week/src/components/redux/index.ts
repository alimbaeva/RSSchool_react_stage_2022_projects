import { configureStore } from '@reduxjs/toolkit';
import { reducerGetDataCards } from 'components/carts/redux/slice';
import { reducerSearchData, reducerCerdForm } from './slice';

const store = configureStore({
  reducer: {
    search: reducerSearchData,
    creadCard: reducerCerdForm,
    getCards: reducerGetDataCards,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export { store };
