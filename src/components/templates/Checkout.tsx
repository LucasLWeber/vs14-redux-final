import { Title } from "../atoms/Title";
import { Header } from "../organisms/Header";

export function Checkout(){
	return(
		<>
			<Header/>
			<main className="lg:w-4/5 mx-auto flex flex-col gap-y-4">
				<Title content="Finalizar compra" />
			</main>
		</>
	);
}