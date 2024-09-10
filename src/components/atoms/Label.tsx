import { LabelProps } from "../../utils/interfaces";

export default function Label ({...label}:LabelProps){
    return(
        <label htmlFor={label.htmlfor} >{label.label}</label>
    )
}