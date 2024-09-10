import { Card } from "../molecules/Card";

export function ProductList(){
	return(
		<div className="flex gap-12 flex-wrap">
			<Card 
				cardImageProps={{url: '/assets/camera.jpg', alt: 'Câmera fotográfica'}}
				cardTitleProps={{content: 'Câmera Fotográfica'}}
				priceProps={{ value: 1249 }}
			/>
			<Card 
				cardImageProps={{url: '/assets/chair.jpeg', alt: 'Cadeira Gamer' }}
				cardTitleProps={{content: 'Cadeira Gamer'}}
				priceProps={{ value: 899 }}
			/>
			<Card 
				cardImageProps={{url: '/assets/computer.jpeg', alt: 'Computador Gamer'}}
				cardTitleProps={{content: 'Computador Gamer'}}
				priceProps={{ value: 4599 }}
			/>
		</div>
	);
}