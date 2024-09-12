import { useDispatch, useSelector } from "react-redux";
import { ProductItemProps } from "../../../utils/interfaces";
import { DecrementButton } from "../../atoms/Checkout/DecrementButton";
import { IncrementButton } from "../../atoms/Checkout/IncrementButton";
import { ProductQuantity } from "../../atoms/Checkout/ProductQuantity";
import { RemoveButton } from "../../atoms/Checkout/RemoveButton";
import { clearEspecifProduct, decrementProduct, incrementProduct } from "../../../slice/cartSlice";
import { RootState } from "../../../store/store";

export function ProductActionButtons({ id }: ProductItemProps){

	const dispatch = useDispatch();
	const cart = useSelector((state: RootState) => state.cart.cart)

	const handleIncrement = () => {
		if(id)
			dispatch(incrementProduct(id)); 
	}
	
	const handleDecrement = () => {
		if(id)
			dispatch(decrementProduct(id)); 
	};

	const handleClearEspecif = () => {
		if(id)
			dispatch(clearEspecifProduct(id));
	}

	const handleQuantity = (): number => {
		if(id){
			const quantity = cart.filter(product => product.id === id).length;
			return quantity;
		} else {
			return 0
		}
	}
	
	return(
		<div className="flex gap-x-4 items-center">
				<RemoveButton clearFunction={handleClearEspecif}/>
				<DecrementButton decrementFunction={handleDecrement}/>
				<ProductQuantity quantity={handleQuantity()}/>
				<IncrementButton incrementFunction={handleIncrement}/>
			</div>
	);
}