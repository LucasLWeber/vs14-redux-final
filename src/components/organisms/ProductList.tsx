import { useGetAllProductsQuery } from "../../services/productsApi";
import { Subtitle } from "../atoms/Subtitle";
import { Card } from "../molecules/Card";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: "eletronics";
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

interface ProductListProps {
  filter: string;
}

export function ProductList({ filter }: ProductListProps) {
  const { data: products, error, isLoading } = useGetAllProductsQuery();
	console.log(products);
	
  if (isLoading) {
    return <Subtitle content="Carregando lista de produtos..." />;
  }

  if (error) {
    return <Subtitle content="Erro ao carregar lista de produtos..." />;
  }

 
  const sortProducts = (products: Product[]): Product[] => {
	const productsCopy = [...products];
    
    switch (filter) {
      case "maiorPreco":
        return productsCopy.sort((a, b) => b.price - a.price);
      case "menorPreco":
        return productsCopy.sort((a, b) => a.price - b.price);
      case "maiorQuantidade":
        return productsCopy.sort((a, b) => b.rating.count - a.rating.count);
      case "menorQuantidade":
        return productsCopy.sort((a, b) => a.rating.count - b.rating.count);
      case "maisAvaliado":
        return productsCopy.sort((a, b) => b.rating.rate - a.rating.rate);
      case "menosAvaliado":
        return productsCopy.sort((a, b) => a.rating.rate - b.rating.rate);
	  case "todos":
		return productsCopy;
      default:
        return productsCopy;
    }
  };
  
  const sortedProducts = sortProducts(products || []);

	return(
		<div className="flex gap-12 flex-wrap justify-center">
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
