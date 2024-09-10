import { ButtonProps } from "../../utils/interfaces";

export function Button({ text, type }: ButtonProps){
	return(
		<button
			className="bg-custom-green text-white px-2 py-1 rounded text-sm"
			type={type}
		>
			{text}
		</button>
	);
}