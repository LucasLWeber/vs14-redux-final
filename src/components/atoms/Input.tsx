import { InputProps } from "../../utils/interfaces";

export default function Input({ register, name, type, placeholder }: InputProps & { register: any }) {
    return (
        <input {...register(name)} type={type} placeholder={placeholder} />
    );
}