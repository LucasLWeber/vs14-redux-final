import { ButtonProps } from "../../../utils/interfaces";

export function CheckoutButton({ text, type, isDisabled }: ButtonProps){
	return(
		<button
			className="bg-custom-green text-white px-4 py-2 rounded text-sm hover:bg-hover-green shadow"
			type={type}
			disabled={isDisabled}
		>
			{text}
		</button>
	);
}