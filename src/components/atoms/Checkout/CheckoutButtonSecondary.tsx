import { ButtonProps } from "../../../utils/interfaces";

export function CheckoutButtonSecondary({ text, type }: ButtonProps){
	return(
		<button
			className="bg-transparent border border-custom-green hover:bg-custom-green text-custom-green hover:text-white px-4 py-2 rounded text-sm hover:bg-custom-green shadow"
			type={type}
		>
			{text}
		</button>
	);
}