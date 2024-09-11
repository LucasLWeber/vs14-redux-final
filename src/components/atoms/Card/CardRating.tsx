import { CardRatingProps } from "../../../utils/interfaces";

export function CardRating({ value }: CardRatingProps){
	return(
		<span className="text-sm text-gray-500">{value} / 5</span>
	); 
}