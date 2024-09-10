import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Products } from "./components/templates/Products";
import { Checkout } from "./components/templates/Checkout";
import { Header } from "./components/organisms/Header";

export function Router(){
	return(
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Products />} />
				<Route path="/finalizar" element={<Checkout />} />
			</Routes>
		</BrowserRouter>
	);
}