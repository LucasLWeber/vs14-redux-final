import { useForm, SubmitHandler } from "react-hook-form";
import InputWithLabel from "../molecules/InputWithLabel";
import { Button, ButtonGoogleLogin } from "../atoms/Button";
import { LoginValues } from "../../utils/interfaces";
import { useDispatch, useSelector } from 'react-redux';
import { fetchLogin } from '../../slice/loginSlice';
import { AppDispatch, RootState } from '../../store/store';
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
    const { register, handleSubmit } = useForm<LoginValues>();
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    
    const { loading, status, error } = useSelector((state: RootState) => state.user);

    const onSubmit: SubmitHandler<LoginValues> = async (data) => {
        const resultAction = await dispatch(fetchLogin({ username: data.username, password: data.password }));
        
        if (fetchLogin.fulfilled.match(resultAction)) {
            console.log('Login bem-sucedido!');
            
            navigate('/produtos'); 
        } else if (fetchLogin.rejected.match(resultAction)) {
            console.error('Erro ao realizar login:', resultAction.error.message);
        }
    };

    return (
        <form className="flex flex-col items-center p-4 gap-4 bg-white rounded-xl" onSubmit={handleSubmit(onSubmit)}>
            <InputWithLabel 
                input={{ name: "username", placeholder: "alisson", type: "text" }} 
                label={{ htmlfor: "username", label: "Nome" }} 
                register={register}
            />

            <InputWithLabel 
                input={{ name: "password", placeholder: "*******", type: "password" }} 
                label={{ htmlfor: "password", label: "Senha" }} 
                register={register}
            />

            {loading && <p>Carregando...</p>}
            {status === 'failed' && <p className="text-red-500">{error}</p>}
            
            <Button type="submit" text="Acessar" />

			<ButtonGoogleLogin />
        </form>
    );
}
