import { Navigate, Outlet } from "react-router-dom"
import { getToken } from "../../utils/functions"
import { jwtDecode } from "jwt-decode";
import { Usuario } from "../../utils/interfaces";
import { setUser } from "../../slice/loginSlice";
import { useDispatch } from "react-redux";

export function PrivateRoute() {
  const token = getToken()
  const dispatch = useDispatch();

  if(token){
    try {
      const decoded: Usuario = jwtDecode(token);
      dispatch(setUser({
      name: decoded.name,
      email: decoded.email,
      picture: decoded.picture
      }));
    } catch (error) {
      throw new Error("Erro ao decodificar o token:" + error);
    }
  }
  return token ? <Outlet /> : <Navigate to="/login"/>
}


