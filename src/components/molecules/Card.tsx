import { useDispatch, useSelector } from "react-redux";
import { CardProps, Product } from "../../utils/interfaces";
import { Button } from "../atoms/Button";
import { CardImage } from "../atoms/Card/CardImage";
import { CardItemsInStock } from "../atoms/Card/CardItemsInStock";
import { CardRating } from "../atoms/Card/CardRating";
import { CardTitle } from "../atoms/Card/CardTitle";
import { Price } from "../atoms/Card/Price";
import { addProductIntoCart } from "../../slice/cartSlice";
import { CiHeart } from "react-icons/ci";
import { RootState } from "../../store/store";
import { toggleFavorite } from "../../slice/favoritesSlice";
import { FaHeart } from "react-icons/fa";
import { useTranslation } from "react-i18next";

interface CardComponentProps extends CardProps {
	product: Product;
  }

export function Card({product, ...cardProps}: CardComponentProps){
	const {t} = useTranslation()
	const dispatch = useDispatch();
	const favoriteProducts = useSelector((state: RootState) => state.favorites.favoriteProducts);
	const isFavorite = favoriteProducts.some((favProduct) => favProduct.id === product.id);

	const handleAddToCart = () => {
		dispatch(addProductIntoCart(product));
	};

	const handleToggleFavorite = () => {
		dispatch(toggleFavorite(product))
	}

	return(
		<div className="flex flex-col rounded-lg shadow justify-between overflow-hidden max-w-[300px]">
			<div className="h-48 self-center">
        		<CardImage url={cardProps.cardImageProps.url} alt={cardProps.cardImageProps.alt} />
    		</div>
			<div className="flex flex-col p-2 gap-y-4">
				<CardTitle content={cardProps.cardTitleProps.content} />
				<div className="flex items-center justify-between gap-x-4">
					<Price value={cardProps.priceProps.value} />
					<div className="flex items-center gap-x-2">
						{isFavorite ? (
							<FaHeart className="text-red-500 cursor-pointer" onClick={handleToggleFavorite} />
						) : (
							<CiHeart className="cursor-pointer" onClick={handleToggleFavorite} />
						)}
						<Button 
							text={t("txtAdicionar")} 
							type="button" 
							addItemIntoCart={handleAddToCart} 
						/>
					</div>
				</div>
				<div className="flex items-center justify-between gap-x-4">
					<CardItemsInStock value={cardProps.itemInStock.value} />
					<CardRating value={cardProps.rateProps.value} />
				</div>
			</div>
		</div>
	);
}