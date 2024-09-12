import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../utils/interfaces";
import { getFavoriteItemsFromLocalStorage, removeFavoriteItemFromLocalStorage, saveFavoriteItemInLocalStorage } from "../utils/functions";

interface FavoritesState{
	favoriteProducts: Product[];
}

const initialState: FavoritesState = {
	favoriteProducts: getFavoriteItemsFromLocalStorage() || [],
}

const favoriteSlice = createSlice({
	name: 'favorites',
	initialState,
	reducers: {
		toggleFavorite(state, action: PayloadAction<Product>) {
			const product = action.payload;
			const isFavorite = state.favoriteProducts.some(
			  (favProduct) => favProduct.id === product.id
			);
	  
			if (isFavorite) {
			  state.favoriteProducts = state.favoriteProducts.filter(
				(favProduct) => favProduct.id !== product.id
			  );
			  removeFavoriteItemFromLocalStorage(product.id);
			} else {
			  state.favoriteProducts.push(product);
			  saveFavoriteItemInLocalStorage(product);
			}
		  },
	}
})

export const { toggleFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;