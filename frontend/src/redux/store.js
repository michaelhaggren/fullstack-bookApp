import { configureStore } from '@reduxjs/toolkit';
// import bookReducer from './bookSlice';
import { bookApi } from '../services/bookApi';
import { setupListeners } from '@reduxjs/toolkit/query';
export const myStore = configureStore({
  reducer: {
    [bookApi.reducerPath]: bookApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(bookApi.middleware),
});
setupListeners(myStore.dispatch);
