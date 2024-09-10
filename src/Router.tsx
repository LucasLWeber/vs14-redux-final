import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Products } from "./components/templates/Products";

export function Router(){
	return(
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Products />} />
			</Routes>
		</BrowserRouter>
	);
}