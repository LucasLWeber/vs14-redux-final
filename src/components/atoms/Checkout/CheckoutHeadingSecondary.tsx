import { useTranslation } from "react-i18next";

export function CheckoutHeadingSecondary(){
	const { t } = useTranslation();
	return(
		<h3 className="text-gray-500 lg:text-lg text-base">{t('finalizar.total')}</h3>
	);
}