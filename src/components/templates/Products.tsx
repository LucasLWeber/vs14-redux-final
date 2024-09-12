import { useState } from "react";
import Filter from "../atoms/Filter";
import { Title } from "../atoms/Title";
import { Header } from "../organisms/Header";
import { ProductList } from "../organisms/ProductList";
import Sidebar from "../organisms/Sidebar";
import { useTranslation } from "react-i18next";

export function Products(){
	const { t } = useTranslation();
	const [filter, setFilter] = useState<string>("");
	return(
		<>
			<Header/>
			<main className="lg:w-4/5 mx-auto flex flex-col gap-8">
				<div className="flex justify-between">
					<Title content={t('titleProdutos')}/>
					<Filter onFilterChange={setFilter}/>
				</div>
				<ProductList filter={filter}/>
				<Sidebar/>
			</main>
		</>
	);
}