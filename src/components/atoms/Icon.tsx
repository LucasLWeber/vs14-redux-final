import { IconProps } from "../../utils/interfaces";

export function Icon({ url, alt, heigth, width }: IconProps){
	return(
		<img src={url} alt={alt} height={heigth} width={width}/>
	);
}