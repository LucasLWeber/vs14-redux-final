import { useState } from "react";
import Filter from "../atoms/Filter";
import { Title } from "../atoms/Title";
import { Header } from "../organisms/Header";
import { ProductList } from "../organisms/ProductList";
import Sidebar from "../organisms/Sidebar";

export function Products(){
	const [filter, setFilter] = useState<string>("");
	return(
		<>
			<Header/>
			<main className="lg:w-4/5 mx-auto flex flex-col gap-8">
				<div className="flex justify-between">
					<Title content="Produtos"/>
					<Filter onFilterChange={setFilter}/>
				</div>
				<ProductList filter={filter}/>
				<Sidebar/>
			</main>
		</>
	);
}