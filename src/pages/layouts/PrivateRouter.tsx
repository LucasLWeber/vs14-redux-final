import { Navigate, Outlet } from "react-router-dom"
import { getToken } from "../../utils/functions"

export function PrivateRoute() {
  const token = getToken()

  return token ? <Outlet /> : <Navigate to="/login"/>
}