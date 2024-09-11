import { CardItemsInStockProps } from "../../../utils/interfaces";

export function CardItemsInStock({ value }: CardItemsInStockProps){
	return(
		<span className="text-sm text-gray-500">Quantidade em estoque: <strong>{value}</strong></span>
	);
}