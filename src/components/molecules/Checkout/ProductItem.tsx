import { DecrementButton } from "../../atoms/Checkout/DecrementButton";
import { IncrementButton } from "../../atoms/Checkout/IncrementButton";
import { ProductImage } from "../../atoms/Checkout/ProductImage";
import { ProductName } from "../../atoms/Checkout/ProductName";
import { ProductQuantity } from "../../atoms/Checkout/ProductQuantity";

export function ProductItem(){
	return(
		<div className="flex items-center justify-between border-b-1 border-gray-100 my-4">
			<div className="flex gap-x-4 items-center">
				<ProductImage />
				<ProductName />
			</div>
			<div className="flex gap-x-4 items-center">
				<DecrementButton />
				<ProductQuantity />
				<IncrementButton />
			</div>
		</div>
	);
}