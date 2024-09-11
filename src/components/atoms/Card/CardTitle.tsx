import { CardTitleProps } from "../../../utils/interfaces";

export function CardTitle({ content }: CardTitleProps){
	return(
		<h3 className="w-full">{content}</h3>
	);
}