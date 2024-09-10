import { TitleProps } from "../../utils/interfaces";

export function Title({ content }: TitleProps){
	return (
		<h1 className="poppins-semibold text-3xl text-custom-black">{content}</h1>
	); 
}