import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

export function CartCounter(){
	const cart = useSelector((state: RootState) => state.cart.cart)

	return(
		<span className="absolute left-5 bottom-5 inline-block bg-custom-black text-white h-4 w-4 rounded-full text-center text-xs font-bold">
			{cart.length}
		</span>
	);
}