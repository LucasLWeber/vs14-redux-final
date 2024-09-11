import { IncrementButtonProps } from "../../../utils/interfaces";

export function IncrementButton({ incrementFunction }: IncrementButtonProps ){
	return (
		<button
			type="button"
			className="bg-custom-green hover:bg-hover-green px-4 py-2 rounded shadow"
			onClick={incrementFunction}
		>
			+
		</button>
	);
}