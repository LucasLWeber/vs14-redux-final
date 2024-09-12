import { ProductNameOnCartProps } from "../../../utils/interfaces";

export function ProductName({ name }: ProductNameOnCartProps){
	return(
		<p className="text-xs text-custom-black max-w-60">{name}</p>
	);
}