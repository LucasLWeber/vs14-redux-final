// src/Router.tsx
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Products } from "./components/templates/Products";
import { Checkout } from "./components/templates/Checkout";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Login from "./components/templates/Login";
import { PublicRoute } from "./pages/layouts/PublicRouter";
import { TokenVerify } from "./pages/layouts/TokenVerify";
import { PrivateRoute } from "./pages/layouts/PrivateRouter";


export function Router() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<TokenVerify />} />
                    
                    <Route element={<PublicRoute />}>
                        <Route path="/login" element={<Login />} />
                    </Route>
                    
                    <Route element={<PrivateRoute />}>
                        <Route path="/produtos" element={<Products />} />
                        <Route path="/finalizar" element={<Checkout />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}