import { Link } from "react-router-dom";
import { Icon } from "../atoms/Icon";
import { CartCounter } from "../atoms/CartCounter";
import { useState } from "react";
import { UserImage } from "../atoms/User/UserImage";
import { UserName } from "../atoms/User/UserName";

export function Navbar(){
	// TODO -> Criar gerenciador de estado global para controlar os items do carrinho
	const [counter, setCounter] = useState(0);
	const [isAuth, setIsAuth] = useState(true);
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
					{!isAuth 
						? <Icon url="/assets/Profile.svg" alt="Perfil" heigth="34" width="34" />
						: <div className="flex flex-col items-center gap-y-1">
							<UserImage />
							<UserName />
						</div>
					}
				</Link>
			</ul>
		</nav>
	);
}