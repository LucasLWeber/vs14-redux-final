interface CardImageProps{
	url: string;
	alt: string;
}

export function CardImage({ url, alt }: CardImageProps){
	return(
		<img src={url} alt={alt} />
	);
}