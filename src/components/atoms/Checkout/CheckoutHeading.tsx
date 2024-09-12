import { useTranslation } from "react-i18next";

export function CheckoutHeading(){
	const { t } = useTranslation();
	return(
		<h2 className="text-custom-black lg:text-2xl text-lg text-center">{t('finalizar.subtitle')}</h2>
	);
}