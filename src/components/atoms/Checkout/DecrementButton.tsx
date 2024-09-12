import { DecrementButtonProps } from "../../../utils/interfaces";

export function DecrementButton({ decrementFunction } : DecrementButtonProps){ 
	return (
		<button
			type="button"
			className="bg-transparent border border-custom-green hover:bg-custom-green px-4 py-2 rounded shadow text-gray-900"
			onClick={decrementFunction}
		>
			-
		</button>
	);
}