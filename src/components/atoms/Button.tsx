import { GoogleLogin } from '@react-oauth/google';
import { ButtonProps, Usuario } from "../../utils/interfaces";
import { jwtDecode } from 'jwt-decode';
import { setUser } from '../../slice/loginSlice';
import { useDispatch } from 'react-redux';
import { setToken } from '../../utils/functions';
import { useNavigate } from 'react-router-dom';

export function Button({ text, type, addItemIntoCart }: ButtonProps){
	
	return(
		<button 
			className="bg-custom-green text-white px-2 py-1 rounded text-sm hover:bg-hover-green shadow"
			type={type}
			onClick={addItemIntoCart}
		>
			{text}
		</button>
	);
}
export function ButtonGoogleLogin() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
  
	return (
	  <GoogleLogin
		onSuccess={(credentialResponse) => {
		  const token = credentialResponse?.credential;
		  if (token) {
			try {
			  const decoded: Usuario = jwtDecode(token);
			  dispatch(setUser({
				name: decoded.name,
				email: decoded.email,
				picture: decoded.picture
			  }));
			  setToken(token);
			  navigate("/produtos");
			} catch (error) {
			  throw new Error("Erro ao decodificar o token:" + error);
			}
		  } else {
			throw new Error("Token não fornecido");
		  }
		}}
		onError={() => {
		  console.log("Falha ao autenticar");
		  alert("Erro ao autenticar com Google. Tente novamente.");
		}}
	  />
	);
  }
