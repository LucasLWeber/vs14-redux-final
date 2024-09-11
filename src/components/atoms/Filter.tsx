interface FilterProps {
    onFilterChange: (value: string) => void;
}
export default function Filter ({onFilterChange}: FilterProps){
    return(
        <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5" onChange={(e)=> onFilterChange(e.target.value)}>
            <option selected value="todos">Todos</option>
            <option value="maiorPreco">Maior preço</option>
            <option value="menorPreco">Menor preço </option>
            <option value="menorQuantidade">Menor quantidade </option>
            <option value="maiorQuantidade">Maior quantidade</option>
            <option value="maisAvaliado">Maior avaliação</option>
            <option value="menosAvaliado">Menor Avaliação</option>
        </select>
    )
}