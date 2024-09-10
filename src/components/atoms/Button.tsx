import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { ButtonGoogleLoginProps, ButtonProps } from "../../utils/interfaces";

export function Button({ text, type }: ButtonProps){
	return(
		<button
			className="bg-custom-green text-white px-2 py-1 rounded text-sm"
			type={type}
		>
			{text}
		</button>
	);
}
export function ButtonGoogleLogin({ credentialResponse }: ButtonGoogleLoginProps) {
	return (
	  <GoogleLogin
		clientId="355127692237-pl4cunsvnu2qqqohips8v33tuib005hm.apps.googleusercontent.com"
		buttonText="Login com Google"
		onSuccess={(response: CredentialResponse) => credentialResponse(response)}
		onError={(error: any) => { // Atualizado para 'onError'
		  console.log("Falha ao autenticar:", error);
		  alert("Erro ao autenticar com Google. Tente novamente."); // Mensagem de erro personalizada
		}}
		cookiePolicy={'single_host_origin'}
	  />
	);
  }