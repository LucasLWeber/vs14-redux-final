import { ProductImageOnCartProps } from "../../../utils/interfaces";

export function ProductImage({ path, name }: ProductImageOnCartProps){

	return(
		<img className="h-8 w-8 object-fit rounded-sm" src={path} alt={name} />
	); 
}