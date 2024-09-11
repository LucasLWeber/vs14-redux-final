import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../utils/interfaces";

interface CartState{
	cart: Product[];
	total: number;
}

const initialState: CartState = {
	cart: [],
	total: 0,
}

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addProductIntoCart: (state, action: PayloadAction<Product>) => {
			state.cart.push(action.payload);
			state.total += action.payload.price;
		},
		decrementProduct: (state, action: PayloadAction<number>) => {
			const productId = action.payload;
			const index = state.cart.findIndex(product => product.id === productId);
			if (index !== -1) {
				state.total -= state.cart[index].price;
				state.cart.splice(index, 1);
			}
		},
		incrementProduct: (state, action: PayloadAction<number>) => {
			const productId = action.payload;
			const product = state.cart.find(product => product.id === productId);
			if (product) {
				state.total += product.price;
				state.cart.push(product)
			}
		},
		clearEspecifProduct: (state, action: PayloadAction<number>) => {
			const productId = action.payload;
			const itemsToRemove = state.cart.filter(product => product.id === productId);
			const totalToRemove = itemsToRemove.reduce((sum, product) => sum + product.price, 0);
			state.total -= totalToRemove;
			state.cart = state.cart.filter(product => product.id !== productId);
		}
	}
});

export const { addProductIntoCart, decrementProduct, incrementProduct, clearEspecifProduct } = cartSlice.actions;
export default cartSlice.reducer;
