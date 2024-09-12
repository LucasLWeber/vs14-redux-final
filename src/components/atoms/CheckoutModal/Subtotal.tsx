import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";

export function Subtotal(){
	const subtotal = useSelector((state: RootState) => state.cart.total )
	return(
		<p className="text-custom-black text-gray-600">Subtotal: <strong>R$ {subtotal.toFixed(2)}</strong></p>
	);
}