import { CardProps } from "../../utils/interfaces";
import { Button } from "../atoms/Button";
import { CardImage } from "../atoms/Card/CardImage";
import { CardItemsInStock } from "../atoms/Card/CardItemsInStock";
import { CardRating } from "../atoms/Card/CardRating";
import { CardTitle } from "../atoms/Card/CardTitle";
import { Price } from "../atoms/Card/Price";

export function Card({...cardProps}: CardProps){
	return(
		<div className="flex flex-col rounded-lg shadow justify-between overflow-hidden max-w-[300px]">
			<div className="h-48 self-center">
        		<CardImage url={cardProps.cardImageProps.url} alt={cardProps.cardImageProps.alt} />
    		</div>
			<div className="flex flex-col p-2 gap-y-4">
				<CardTitle content={cardProps.cardTitleProps.content} />
				<div className="flex items-center justify-between gap-x-4">
					<Price value={cardProps.priceProps.value} />
					<Button text="Adicionar" type="button" />
				</div>
				<div className="flex items-center justify-between gap-x-4">
					<CardItemsInStock value={cardProps.itemInStock.value} />
					<CardRating value={cardProps.rateProps.value} />
				</div>
			</div>
		</div>
	);
}