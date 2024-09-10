import { Link } from "react-router-dom";
import { Icon } from "../atoms/Icon";
import { CartCounter } from "../atoms/CartCounter";
import { useState } from "react";

export function Navbar(){
	// TODO -> Criar gerenciador de estado global para controlar os items do carrinho
	const [counter, setCounter] = useState(0);
	return(
		<nav>
			<ul className="flex items-center justify-center gap-x-8">
				<Link className="relative"
					to={"/"}
				>
					<Icon url="/assets/Cart.svg" alt="Carrinho de compras" heigth="29" width="29" />
					<CartCounter counter={counter}/>
				</Link>
				<Link 
					to={"/"}
				>
					<Icon url="/assets/Profile.svg" alt="Perfil" heigth="34" width="34" />
				</Link>
			</ul>
		</nav>
	);
}