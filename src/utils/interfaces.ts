
export interface TitleProps{
	content: string;
}

export interface SubtitleProps{
	content: string;
}

export interface CardImageProps{
	url: string;
	alt: string;
}

export interface CardTitleProps{
	content: string;
}

export interface PriceProps{
	value: number
}

export interface CardRatingProps{
	value: number
}

export interface CardItemsInStockProps{
	value: number;
}

export interface ButtonProps{
	text: string;
	type: "submit" | "reset" | "button";
}

export interface IconProps {
	url: string;
	alt: string;
	heigth: string;
	width: string;
}

export interface CardProps {
	cardImageProps: CardImageProps;
	cardTitleProps: CardTitleProps;
	priceProps: PriceProps;
	rateProps: CardRatingProps;
	itemInStock: CardItemsInStockProps;
	buttonProps?: ButtonProps;
}

export interface CartCounterProps{
	counter: number;
}

export interface CheckoutModalProps{
	isOpen: boolean;
	onClose: () => void;
}

export interface Usuario {
	name: string;
	email: string;
	picture: string;
}

  export interface ButtonGoogleLoginProps {
	responseGoogle: (usuario: Usuario) => void;}