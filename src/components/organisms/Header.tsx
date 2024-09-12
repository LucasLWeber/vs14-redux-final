import { Logo } from "../atoms/Logo";
import Tradutor from "../atoms/Tradutor";
import { Navbar } from "../molecules/NavBar";

export function Header(){
	return(
		<header className="bg-custom-green w-full py-4">
			<div className="flex items-center justify-between w-4/5 mx-auto">
				<Logo />
				<div className="flex gap-8 justity-center items-center">
				  <Navbar />
				  <Tradutor/>
				</div>
			</div>
		</header>
	);
}