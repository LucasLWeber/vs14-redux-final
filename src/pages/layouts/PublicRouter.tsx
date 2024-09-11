import { Navigate, Outlet } from "react-router-dom"
import { getToken } from "../../utils/functions"

export function PublicRoute() {
  const token = getToken()

  return token ? <Navigate to="/produtos"/> : <Outlet/>
}