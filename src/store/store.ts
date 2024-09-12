import { configureStore } from '@reduxjs/toolkit';
import loginSlice from '../slice/loginSlice';
import { productsApi } from '../services/productsApi';
import cartSlice from '../slice/cartSlice';
import favoritesSlice from '../slice/favoritesSlice';

export const store = configureStore({
  reducer: {
    user: loginSlice,
	cart: cartSlice,
	favorites: favoritesSlice,
	[productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => 
	getDefaultMiddleware().concat(productsApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
