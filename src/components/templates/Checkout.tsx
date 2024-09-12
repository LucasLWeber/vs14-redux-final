import { useTranslation } from "react-i18next";
import { Title } from "../atoms/Title";
import { CheckoutHeadingContainer } from "../molecules/Checkout/CheckoutHeadingContainer";
import { CheckoutInfo } from "../organisms/CheckoutInfo";
import { CheckoutProducts } from "../organisms/CheckoutProducts";
import { Header } from "../organisms/Header";

export function Checkout(){
	const { t } = useTranslation();
	return(
		<>
			<Header/>
			<main className="w-4/5 mx-auto flex flex-col gap-y-8">
				<Title content={t('finalizar.title')} />
				<CheckoutHeadingContainer />
				<div className="w-full flex gap-x-32 lg:flex-row flex-col">
					<CheckoutInfo />
					<CheckoutProducts />
				</div>
			</main>
		</>
	);
}