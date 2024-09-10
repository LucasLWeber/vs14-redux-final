import { PriceProps } from "../../../utils/interfaces";

export function Price({value}: PriceProps){
	return(
		<span
			className="text-custom-black text-base"
		>
			R$ {value}
		</span>
	);
}