import React, { useState } from 'react';

interface FilterProps {
    onFilterChange: (value: string) => void;
}

export default function Filter({ onFilterChange }: FilterProps) {
    const [selectedValue, setSelectedValue] = useState('todos'); // Valor inicial

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newValue = e.target.value;
        setSelectedValue(newValue);
        onFilterChange(newValue);
    };

    return (
        <select
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
            value={selectedValue}
            onChange={handleChange}
        >
            <option value="todos">Todos</option>
            <option value="maiorPreco">Maior preço</option>
            <option value="menorPreco">Menor preço</option>
            <option value="menorQuantidade">Menor quantidade</option>
            <option value="maiorQuantidade">Maior quantidade</option>
            <option value="maisAvaliado">Maior avaliação</option>
            <option value="menosAvaliado">Menor avaliação</option>
        </select>
    );
}
