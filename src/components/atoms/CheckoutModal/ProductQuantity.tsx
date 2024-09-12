import { ProductQuantityProps } from "../../../utils/interfaces";

export function ProductQuantity( {quantity}: ProductQuantityProps){
	return (
		<span className="poppins-semibold text-base text-custom-black w-6 text-center">{quantity}</span>
	);
}