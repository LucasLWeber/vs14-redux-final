export interface TitleProps{
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
	buttonProps?: ButtonProps;
}

export interface CredentialResponse {
	profileObj?: {
	  name: string;
	  email: string;
	  imageUrl: string;
	};
	tokenId?: string;
  }
  
  export interface ButtonGoogleLoginProps {
	credentialResponse: (response: CredentialResponse) => void;
  }