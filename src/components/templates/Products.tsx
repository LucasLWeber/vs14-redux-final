import { Title } from "../atoms/Title";
import { ProductList } from "../organisms/ProductList";

export function Products(){
	return(
		<>
			<Title content="Produtos"/>
			<ProductList />
		</>
	);
}