export function ProductQuantity(){
	// TODO -> Pegar do gerenciador de estado global de produtos
	const items = 1;
	return (
		<span className="poppins-semibold text-base text-custom-black">{items}</span>
	);
}