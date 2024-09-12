import { Link } from "react-router-dom";
import { CheckoutModalProps } from "../../utils/interfaces";
import { CheckoutButton } from "../atoms/CheckoutModal/CheckoutButton";
import { CheckoutButtonSecondary } from "../atoms/CheckoutModal/CheckoutButtonSecondary";
import { Subtitle } from "../atoms/Subtitle";
import { ProductItem } from "../molecules/CheckoutModal/ProductItem";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";
import { useMemo } from "react";
import { Subtotal } from "../atoms/CheckoutModal/Subtotal";
import { useTranslation } from "react-i18next";

export function CheckoutModal({ isOpen, onClose }: CheckoutModalProps){
	const cart = useSelector((state: RootState) => state.cart.cart)
	const {t} = useTranslation()
	const renderedProducts = useMemo(() => {
		const seenIds = new Set<number>();
		return cart.filter(item => {
		  if (seenIds.has(item.id)) {
			return false;
		  }
		  seenIds.add(item.id);
		  return true;
		});
	  }, [cart]);

	return(
		<div 
			className={`fixed top-0 right-0 h-screen lg:w-1/4  w-3/4 bg-white shadow-lg transition-transform transform ${isOpen ? "translate-x-0" : "translate-x-full"} ease-in-out duration-300 px-6`}
		>
			<div className="flex justify-between items-center w-full mb-8 py-4">
				<Subtitle content={t('carrinhoTitulo')}/>
				<button onClick={onClose} className="poppins-regular p-2 text-xl text-gray-500">x</button>
			</div>

			{renderedProducts.map(item => (
				<ProductItem
					key={item.id}
					image={{name: item.title, path: item.image}}
					id={item.id}
				/>
			))}
			<hr className="my-4"/>
			<Subtotal />
			<div className="w-full flex items-center justify-center mt-8 gap-x-4 gap-y-4 flex-wrap">
				<Link to={'/finalizar'} onClick={onClose}>
					<CheckoutButton text={t('finalizarButton')} type="button" />
				</Link>
				<Link to={'/produtos'} onClick={onClose}>
					<CheckoutButtonSecondary text={t('continuarComprandoButton')} type="button" />
				</Link>
			</div>
		</div>
	);
}