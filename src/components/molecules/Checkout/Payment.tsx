import { useSelector } from "react-redux";
import { Subtotal } from "../../atoms/CheckoutModal/Subtotal";
import { RootState } from "../../../store/store";

export function Payment(){
	const quantity = useSelector((state: RootState) => state.cart.cart.length)
	return(
		<div className="w-full flex items-center justify-between">
			<Subtotal />
			<span className="text-base text-custom-black">{quantity}</span>
		</div> 
	);
}