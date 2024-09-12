import { Delivery } from "../atoms/Checkout/Delivery";
import { Payment } from "../molecules/Checkout/Payment";
import { PaymentHeader } from "../molecules/Checkout/PaymentHeader";
import { TotalContainer } from "../molecules/Checkout/TotalContainer";

export function CheckoutInfo(){
	return(
		<div className="flex flex-col gap-y-4 w-1/2">
			<PaymentHeader />
			<hr />
			<Payment />
			<Delivery />
			<hr />
			<TotalContainer />
		</div>
	);
}