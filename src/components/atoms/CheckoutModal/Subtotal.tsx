import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { useTranslation } from "react-i18next";

export function Subtotal(){
	const {t} = useTranslation()
	const subtotal = useSelector((state: RootState) => state.cart.total )
	return(
<<<<<<< HEAD:src/components/atoms/Checkout/Subtotal.tsx
		<p className="text-custom-black">{t('subtotalLabel')}<strong>R$ {subtotal.toFixed(2)}</strong></p>
=======
		<p className="text-custom-black text-gray-600">Subtotal: <strong>R$ {+subtotal.toFixed(2)}</strong></p>
>>>>>>> main:src/components/atoms/CheckoutModal/Subtotal.tsx
	);
}