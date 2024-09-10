import { Link } from "react-router-dom";

export function Logo(){
	return(
		<Link to={"/"}><img src="/assets/Logo.svg" alt="logo DBC Eletronics" height={45} width={80}/></Link>
	);
}