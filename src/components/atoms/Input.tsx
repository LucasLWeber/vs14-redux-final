import { InputProps } from "../../utils/interfaces";

export default function Input({...inputProps}:InputProps){
    return (
        <input name={inputProps.name} type={inputProps.typeInput} placeholder={inputProps.placeholder}/>
    )
}