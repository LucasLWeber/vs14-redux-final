import { Button } from "../../atoms/Button";
import { Total } from "../../atoms/Checkout/Total";

export function TotalContainer(){
	return(
		<div className="flex items-center justify-between">
			<Total />
			<Button text="Ir para pagamento" type="button" />
		</div>
	);
}