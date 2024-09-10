import { InputWithLabelProps,} from "../../utils/interfaces"
import Label from "../atoms/Label"
import Input from "../atoms/Input"

export default function InputWithLabel ({...props}: InputWithLabelProps){
    return(
        <div>
            <Label htmlfor={props.label.htmlfor} label={props.label.label} />
            <Input name={props.input.name} placeholder={props.input.placeholder} typeInput={props.input.typeInput} />
        </div>
    )
}