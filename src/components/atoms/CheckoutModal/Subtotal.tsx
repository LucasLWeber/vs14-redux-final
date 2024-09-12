import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { useTranslation } from "react-i18next";

export function Subtotal(){
	const {t} = useTranslation()
	const subtotal = useSelector((state: RootState) => state.cart.total )
	return(
		<p className="text-custom-black">{t('subtotalLabel')}<strong>R$ {subtotal.toFixed(2)}</strong></p>
	);
}