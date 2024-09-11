import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Products } from "./components/templates/Products";
import { Checkout } from "./components/templates/Checkout";
import { Header } from "./components/organisms/Header";
import { Provider } from "react-redux";
import { store } from "./store/store";

export function Router(){
	return(
		<Provider store={store}>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<Products />} />
					<Route path="/finalizar" element={<Checkout />} />
				</Routes>
			</BrowserRouter>
		</Provider>
	);
}