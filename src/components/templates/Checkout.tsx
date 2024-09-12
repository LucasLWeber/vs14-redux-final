import { Delivery } from "../atoms/Checkout/Delivery";
import { Title } from "../atoms/Title";
import { CheckoutHeadingContainer } from "../molecules/Checkout/CheckoutHeadingContainer";
import { Payment } from "../molecules/Checkout/Payment";
import { PaymentHeader } from "../molecules/Checkout/PaymentHeader";
import { TotalContainer } from "../molecules/Checkout/TotalContainer";
import { Header } from "../organisms/Header";

export function Checkout(){
	return(
		<>
			<Header/>
			<main className="lg:w-4/5 mx-auto flex flex-col gap-y-4">
				<Title content="Finalizar compra" />
				<CheckoutHeadingContainer />
				<div className="flex flex-col gap-y-4 w-2/5">
					<PaymentHeader />
					<hr />
					<Payment />
					<Delivery />
					<hr />
					<TotalContainer />
				</div>
			</main>
		</>
	);
}