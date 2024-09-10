import { CardImageProps } from "../../../utils/interfaces";

export function CardImage({ url, alt }: CardImageProps){
	return(
		<img 
			className="object-fit h-full"
			src={url} alt={alt}
		/>
	);
}