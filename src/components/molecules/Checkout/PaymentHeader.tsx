import { CheckoutHeadingSecondary } from "../../atoms/Checkout/CheckoutHeadingSecondary";

export function PaymentHeader(){
	return(
		<div className="w-full flex items-center justify-between">
			<CheckoutHeadingSecondary />
			<span className="text-base text-gray-500">Itens no carrinho</span>
		</div>
	);
}