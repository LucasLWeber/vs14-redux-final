import { Link } from "react-router-dom";

export function BackToShop(){
	return(
		<Link 
			to={"/produtos"} 
			className="text-custom-green underline lg:text-base text-sm text-center"
		>
			Continuar comprando
		</Link>
	);
}