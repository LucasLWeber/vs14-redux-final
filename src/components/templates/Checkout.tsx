import { Title } from "../atoms/Title";
import { CheckoutHeadingContainer } from "../molecules/Checkout/CheckoutHeadingContainer";
import { CheckoutInfo } from "../organisms/CheckoutInfo";
import { CheckoutProducts } from "../organisms/CheckoutProducts";
import { Header } from "../organisms/Header";

export function Checkout(){
	return(
		<>
			<Header/>
			<main className="lg:w-4/5 mx-auto flex flex-col gap-y-8">
				<Title content="Finalizar compra" />
				<CheckoutHeadingContainer />
				<div className="flex gap-x-32">
					<CheckoutInfo />
					<CheckoutProducts />
				</div>
			</main>
		</>
	);
}