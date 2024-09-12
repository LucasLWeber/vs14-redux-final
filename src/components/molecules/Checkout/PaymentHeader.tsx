import { useTranslation } from "react-i18next";
import { CheckoutHeadingSecondary } from "../../atoms/Checkout/CheckoutHeadingSecondary";

export function PaymentHeader(){
	const { t } = useTranslation();
	return(
		<div className="w-full flex items-center justify-between">
			<CheckoutHeadingSecondary />
			<span className="text-base text-gray-500">{t('finalizar.itensInCart')}</span>
		</div>
	);
}