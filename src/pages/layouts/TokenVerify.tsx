import { Navigate } from "react-router-dom";
import { getToken } from "../../utils/functions";

export function TokenVerify (){
    const token = getToken();
    return token ? <Navigate to={"/produtos"}/> : <Navigate to={"/login"}/>
}