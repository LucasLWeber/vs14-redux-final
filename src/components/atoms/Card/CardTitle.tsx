interface CardTitleProps{
	content: string;
}

export function CardTitle({ content }: CardTitleProps){
	return(
		<h3>{content}</h3>
	);
}