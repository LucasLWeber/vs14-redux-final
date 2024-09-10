interface PriceProps{
	value: number
}

export function Price({value}: PriceProps){
	return(
		<span>R$ {value}</span>
	);
}