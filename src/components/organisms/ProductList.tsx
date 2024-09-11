import { useGetAllProductsQuery } from "../../services/productsApi";
import { Subtitle } from "../atoms/Subtitle";
import { Card } from "../molecules/Card";

export function ProductList(){
	const { data: products, error, isLoading } = useGetAllProductsQuery();

	if(isLoading){
		return <Subtitle content="Carregando lista de produtos..." />
	}

	if(error){
		return <Subtitle content="Erro ao carregar lista de produtos..." />
	}

	return(
		<div className="flex gap-12 flex-wrap">
			{products?.map((product) => (
				<Card 
				key={product.id}
				product={product} 
				cardImageProps={{url: product.image, alt: product.title}}
				cardTitleProps={{content: product.title}}
				rateProps={{value: product.rating.rate}}
				itemInStock={{value: product.rating.count}}
				priceProps={{ value: product.price }}
			/>
			))}
		</div>
	);
}