import { SubtitleProps } from "../../utils/interfaces";

export function Subtitle({ content }: SubtitleProps){
	return(
		<h2 className="poppins-regular text-2xl text-custom-black">{content}</h2>
	);
}