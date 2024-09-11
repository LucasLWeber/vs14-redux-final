import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../utils/interfaces";

interface CartState{
	cart: Product[];
}

const initialState: CartState = {
	cart: []
}

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addProductIntoCart: (state, action: PayloadAction<Product>) => {
			state.cart.push(action.payload);
		},
		decrementProduct: (state, action: PayloadAction<number>) => {
			const productId = action.payload;
			const index = state.cart.findIndex(product => product.id === productId);
			if (index !== -1) 
				state.cart.splice(index, 1);
		},
		incrementProduct: (state, action: PayloadAction<number>) => {
			const productId = action.payload;
			const product = state.cart.find(product => product.id === productId);
			if (product)
				state.cart.push(product)
		},
		clearEspecifProduct: (state, action: PayloadAction<number>) => {
			const productId = action.payload;
			state.cart = state.cart.filter(product => product.id !== productId);
		}
	}
});

export const { addProductIntoCart, decrementProduct, incrementProduct, clearEspecifProduct } = cartSlice.actions;
export default cartSlice.reducer;
