import { GoogleLogin } from '@react-oauth/google';
import { ButtonProps, Usuario } from "../../utils/interfaces";
import { jwtDecode } from 'jwt-decode';
import { setUser } from '../../slice/loginSlice';
import { useDispatch } from 'react-redux';

export function Button({ text, type }: ButtonProps){
	return(
		<button
			className="bg-custom-green text-white px-2 py-1 rounded text-sm hover:bg-hover-green shadow"
			type={type}
		>
			{text}
		</button>
	);
}
export function ButtonGoogleLogin() {
	const dispatch = useDispatch();
  
	return (
	  <GoogleLogin
		onSuccess={(credentialResponse) => {
		  const token = credentialResponse?.credential;
		  if (token) {
			try {
			  const decoded: Usuario = jwtDecode(token);
			  console.log(decoded);
  
			  dispatch(setUser(decoded));
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