import { useTranslation } from "react-i18next";
import { CardItemsInStockProps } from "../../../utils/interfaces";

export function CardItemsInStock({ value }: CardItemsInStockProps){
	const { t } = useTranslation(); 
	return(
		<span className="text-sm text-gray-500">{t('estoque')}<strong>{value}</strong></span>
	);
}