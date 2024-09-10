import { useForm, SubmitHandler } from "react-hook-form";
import InputWithLabel from "../molecules/InputWithLabel";
import { Button } from "../atoms/Button";
import { LoginValues } from "../../utils/interfaces";


export default function LoginForm() {
    const { register, handleSubmit } = useForm<LoginValues>();

    const onSubmit: SubmitHandler<LoginValues> = data => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <InputWithLabel 
                input={{ name: "email", placeholder: "exameplo@email.com", type: "email" }} 
                label={{ htmlfor: "email", label: "Email" }} 
                register={register}
            />

            <InputWithLabel 
                input={{ name: "password", placeholder: "*******", type: "password" }} 
                label={{ htmlfor: "password", label: "Senha" }} 
                register={register}
            />
            
            <Button type="submit" text="Acessar" />
        </form>
    );
}
