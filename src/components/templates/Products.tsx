import { Title } from "../atoms/Title";
import { Header } from "../organisms/Header";
import { ProductList } from "../organisms/ProductList";

export function Products(){
	return(
		<>
			<Header/>
			<main className="lg:w-4/5 mx-auto flex flex-col gap-y-4">

				<Title content="Produtos"/>
				<ProductList />
			</main>
		</>
		
	);
}