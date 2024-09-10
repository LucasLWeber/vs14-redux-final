import { CartCounterProps } from "../../utils/interfaces";

export function CartCounter({ counter }: CartCounterProps){
	return(
		<span className="absolute left-5 bottom-5 inline-block bg-custom-black text-white h-4 w-4 rounded-full text-center text-xs font-bold">
			{counter}
		</span>
	);
}