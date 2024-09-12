import { BackToShop } from "../../atoms/Checkout/BackToShop";
import { CheckoutHeading } from "../../atoms/Checkout/CheckoutHeading";

export function CheckoutHeadingContainer(){
	return(
		<div className="flex flex-col items-center justify-center w-full gap-y-2 mt-4">
			<CheckoutHeading />
			<BackToShop />
		</div>
	);
}