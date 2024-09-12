import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { ProductItem } from "../molecules/CheckoutModal/ProductItem";
import { useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";

export function CheckoutProducts(){
	const cart = useSelector((state: RootState) => state.cart.cart);
	const navigate = useNavigate();

	useEffect(() => {
		if (cart.length === 0) {
		  navigate('/produtos');
		}
	  }, [cart, navigate]);

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
		<div className="flex flex-col w-1/2">
			{renderedProducts.map((produtc) => 
				<ProductItem id={produtc.id} image={{path: produtc.image, name: produtc.title}} />
			)}
		</div>
	);
}