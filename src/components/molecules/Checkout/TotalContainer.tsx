import { useTranslation } from "react-i18next";
import { Button } from "../../atoms/Button";
import { Total } from "../../atoms/Checkout/Total";

export function TotalContainer(){
	const { t } = useTranslation();
	return(
		<div className="flex items-center justify-between">
			<Total />
			<Button text={t('finalizar.checkoutButton')} type="button" />
		</div>
	);
}