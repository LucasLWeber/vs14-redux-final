import { ProductItemProps } from "../../../utils/interfaces";
import { ProductImage } from "../../atoms/Checkout/ProductImage";
import { ProductActionButtons } from "./ProductActionButtons";


export function ProductItem({ image, id }: ProductItemProps){
	return(
		<div className="flex items-center justify-between border-b-1 border-gray-100 my-4">
			<div className="flex gap-x-4 items-center">
				{image && (
					<ProductImage name={image.name} path={image.path}/>
				)}
			</div>
			<ProductActionButtons id={id}/>
		</div>
	);
}