import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export function BackToShop(){
	const { t } = useTranslation();
	return(
		<Link 
			to={"/produtos"} 
			className="text-custom-green underline lg:text-base text-sm text-center"
		>
			{t('finalizar.link')}
		</Link>
	);
}