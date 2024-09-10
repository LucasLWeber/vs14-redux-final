import { ButtonProps } from "../../utils/interfaces";

export function Button({ text, type }: ButtonProps){
	return(
		<button
			className="bg-custom-green text-white px-2 py-1 rounded text-sm hover:bg-hover-green shadow"
			type={type}
		>
			{text}
		</button>
	);
}