import { Button } from "../atoms/Button";
import { CardImage } from "../atoms/Card/CardImage";
import { CardTitle } from "../atoms/Card/CardTitle";
import { Price } from "../atoms/Card/Price";

export function Card(){
	return(
		<div>
			<CardImage url="" alt=""/>
			<CardTitle content="" />
			<Price value={100} />
			<Button text="Adicionar ao carrinho" type="button" />
		</div>
	);
}