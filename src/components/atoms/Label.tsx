import { LabelProps } from "../../utils/interfaces";

export default function Label ({...label}:LabelProps){
    return(
        <label className="block mb-2 text-sm font-medium text-gray-900 font-poppins font-medium" htmlFor={label.htmlfor} >{label.label}</label>
    )
}