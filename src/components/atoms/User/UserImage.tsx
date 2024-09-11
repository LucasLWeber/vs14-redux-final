export function UserImage(){
	// TODO -> pegar do gerenciador de estados globais
	const path = "/assets/computer.jpeg";
	const name = "Lucas Weber"
	return(
		<img className="w-10 h-10 rounded-full object-fit" src={path} alt={`Perfil de ${name}`} />
	);
}