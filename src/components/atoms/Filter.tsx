import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface FilterProps {
    onFilterChange: (value: string) => void;
}

export default function Filter({ onFilterChange }: FilterProps) {
    const { t } = useTranslation(); 
    const [selectedValue, setSelectedValue] = useState('todos');

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
            <option value="todos">{t('todos')}</option>
            <option value="favoritos">{t('favoritos')}</option>
            <option value="maiorPreco">{t('maiorPreco')}</option>
            <option value="menorPreco">{t('menorPreco')}</option>
            <option value="menorQuantidade">{t('menorQuantidade')}</option>
            <option value="maiorQuantidade">{t('maiorQuantidade')}</option>
            <option value="maisAvaliado">{t('maisAvaliado')}</option>
            <option value="menosAvaliado">{t('menosAvaliado')}</option>
        </select>
    );
}
