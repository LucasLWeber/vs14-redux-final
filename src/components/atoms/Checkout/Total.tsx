import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";

export function Total(){
	const subtotal = useSelector((state: RootState) => state.cart.total);
	// TODO -> trazer da api dos correios
	const frete = 27.98;
	return(
		<p className="text-custom-black text-lg">Total: <strong>R$ {+subtotal.toFixed(2) + +frete.toFixed(2)}</strong></p>
	);
}