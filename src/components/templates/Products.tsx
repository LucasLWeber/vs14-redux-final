import { Title } from "../atoms/Title";
import { Header } from "../organisms/Header";
import { ProductList } from "../organisms/ProductList";

export function Products(){
	return(
		<>
			<Header />
			<Title content="Produtos"/>
			<ProductList />
		</>
	);
}