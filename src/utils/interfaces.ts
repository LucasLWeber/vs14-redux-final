import { UseFormRegister } from "react-hook-form";

export interface LoginValues {
	email: string;
    password: string;
}

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
	addItemIntoCart?: () => void;
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

export interface InputProps {
	type: string;
	placeholder: string;
	name: string;
}

export interface LabelProps {
	label: string;
	htmlfor:string;
}

export interface InputWithLabelProps{
	label: LabelProps;
	input: InputProps;
	register: UseFormRegister<LoginValues>;
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

export interface UsuarioState{
	usuario: Usuario;
	loading: boolean;
	status: 'idle' | 'loading' | 'succeeded' | 'failed';
	error: string  | null
}

  export interface ButtonGoogleLoginProps {
	responseGoogle: (usuario: Usuario) => void;
}

export interface Product {
	id: number;
	title: string;
	price: number;
	description: string;
	category: "eletronics";
	image: string;
	rating: {
		rate: number;
		count: number
	}
	isFavorite?: boolean;
}

export interface ProductImageOnCartProps{
	path: string;
	name: string;
}

export interface ProductNameOnCartProps{
	name: string;
}

export interface ProductItemProps{
	image?: ProductImageOnCartProps;
	name?: ProductNameOnCartProps
	id?: number
}

export interface DecrementButtonProps {
	decrementFunction: () => void;
}

export interface IncrementButtonProps {
	incrementFunction: () => void;
}

export interface RemoveButtonProps{
	clearFunction: () => void;
}

export interface ProductQuantityProps{
	quantity: number;
}