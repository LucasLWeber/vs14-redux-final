import { useTranslation } from "react-i18next";

export default function Tradutor() {
  const { i18n } = useTranslation();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div className="flex justify-center items-center p-4">
      <select
        onChange={handleLanguageChange}
        value={i18n.language}
       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-1.5 font-poppins"
      >
        <option value="pt">Português</option>
        <option value="us">English</option>
        <option value="es">Español</option>
      </select>
    </div>
  );
}