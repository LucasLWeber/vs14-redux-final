import { Title } from "../atoms/Title";
import LoginForm from "../organisms/LoginForm";

export default function Login (){
    return(
        <main>
            <Title content="Login"/>
            <LoginForm/>
        </main>
    )
}