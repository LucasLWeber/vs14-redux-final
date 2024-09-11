import { InputWithLabelProps } from "../../utils/interfaces";
import Label from "../atoms/Label";
import Input from "../atoms/Input";


export default function InputWithLabel({ input, label, register}: InputWithLabelProps) {
    return (
        <div className="flex flex-col">
            <Label htmlfor={label.htmlfor} label={label.label} />
            <Input  register={register} name={input.name} placeholder={input.placeholder} type={input.type} />
        </div>
    );
}
