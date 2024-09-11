import { useForm, SubmitHandler } from "react-hook-form";
import InputWithLabel from "../molecules/InputWithLabel";
import { Button } from "../atoms/Button";
import { LoginValues } from "../../utils/interfaces";
import { useDispatch, useSelector } from 'react-redux';
import { fetchLogin } from '../../slice/loginSlice';
import { AppDispatch, RootState } from '../../store/store';

export default function LoginForm() {
    const { register, handleSubmit} = useForm<LoginValues>();
    const dispatch = useDispatch<AppDispatch>();

    const { loading } = useSelector((state: RootState) => state.user);

    
    const onSubmit: SubmitHandler<LoginValues> = async (data) => {
        dispatch(fetchLogin({ username: data.username, password: data.password }));
    };

    return (
        <form className="flex flex-col items-center p-4 gap-4 bg-white rounded-xl" onSubmit={handleSubmit(onSubmit)}>
            <InputWithLabel 
                input={{ name: "username", placeholder: "alisson", type: "txt",  }} 
                label={{ htmlfor: "username", label: "Nome" }} 
                register={register}
                
            />

            <InputWithLabel 
                input={{ name: "password", placeholder: "*******", type: "password" }} 
                label={{ htmlfor: "password", label: "Senha" }} 
                register={register}

            />

            {loading && <p>Carregando...</p>}  
            
            <Button type="submit" text="Acessar" />
        </form>
    );
}
