import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Products } from "./components/templates/Products";
import Login from "./components/templates/Login";

export function Router(){
	return(
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Products />} />
				<Route path= "/login" element = {<Login/>}/>
			</Routes>
		</BrowserRouter>
	);
}