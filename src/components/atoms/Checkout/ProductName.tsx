import { Product } from "../../../utils/interfaces";

export function ProductName({ ...props }: Product ){
	return(
		<p className="text-base text-custom-black">{props.title}</p>
	);
}