import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Products } from "./components/templates/Products";
import { Checkout } from "./components/templates/Checkout";
import { Header } from "./components/organisms/Header";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Login from "./components/templates/Login";

export function Router(){
	return(
		<Provider store={store}>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<Products />} />
					<Route path="/finalizar" element={<Checkout />} />
					<Route path="/login" element={<Login/>}/>
				</Routes>
			</BrowserRouter>
		</Provider>
	);
}