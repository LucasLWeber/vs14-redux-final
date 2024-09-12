export function Delivery(){
	// TODO -> Trazer da api dos correios
	const frete = 27.98;
	return(
		<p className="text-custom-black w-full text-gray-600">Frete: <strong>R$ {frete.toFixed(2)}</strong></p>
	);
}