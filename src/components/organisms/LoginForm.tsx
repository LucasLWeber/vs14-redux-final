import InputWithLabel from "../molecules/InputWithLabel";
import { Button } from "../atoms/Button";


export default function LoginForm (){
    
    return (
        <form action="submit">
           <InputWithLabel 
                input={{name: "email", placeholder: "exameplo@email.com", typeInput: "email"}} 
                label={{htmlfor: "email", label: "email"}} 
            />
            
            <InputWithLabel 
                input={{name: "password", placeholder: "*******", typeInput: "password"}} 
                label={{htmlfor: "senha", label: "Senha"}} 
            />

            <Button type="submit" text="Acessar"/>
        </form>
    )
}