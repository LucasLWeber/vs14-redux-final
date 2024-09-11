import { configureStore } from '@reduxjs/toolkit';
import loginSlice from '../slice/loginSlice';
import { productsApi } from '../services/productsApi';

export const store = configureStore({
  reducer: {
    user: loginSlice,
	[productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => 
	getDefaultMiddleware().concat(productsApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
