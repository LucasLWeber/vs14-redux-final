import { InputProps } from "../../utils/interfaces";

export default function Input({ register, name, type, placeholder }: InputProps & { register: any }) {
    return (
        <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                focus:border-custom-green block w-full p-2.5 " 
            {...register(name)} type={type} placeholder={placeholder} />
    );
}