interface IconProps {
	url: string;
	alt: string;
	heigth: string;
	width: string;
}

export function Icon({ url, alt, heigth, width }: IconProps){
	return(
		<img src={url} alt={alt} height={heigth} width={width}/>
	);
}