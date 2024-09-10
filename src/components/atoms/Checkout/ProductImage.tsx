export function ProductImage(){
	// TODO -> pegar do gerenciador de estado global
	const path = "/assets/computer.jpeg"
	const name = "/assets/computer.jpeg"
	return(
		<img className="h-8 w-8 object-fit rounded-sm" src={path} alt={name} />
	); 
}