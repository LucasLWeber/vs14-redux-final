import { useForm, SubmitHandler } from "react-hook-form";
import InputWithLabel from "../molecules/InputWithLabel";
import { Button, ButtonGoogleLogin } from "../atoms/Button";
import { LoginValues } from "../../utils/interfaces";
import {  useSelector } from 'react-redux';
import {  RootState } from '../../store/store';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { setToken } from "../../utils/functions";

export default function LoginForm() {
    const { register, handleSubmit } = useForm<LoginValues>();
    const navigate = useNavigate();
    
    const { loading, status, error } = useSelector((state: RootState) => state.user);
    
    const user:LoginValues = {
        username: "alissonf94",
        password: "Alisson@7",
    }

    const onSubmit: SubmitHandler<LoginValues> = async (data) => {
        if(user.password === user.password && data.username === user.username){
            setToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFsaXNzb25mOTQiLCJwYXNzd29y" + 
                "ZCI6IkFsaXNzb25ANyIsInBpY3R1cmUiOiJodHRwczovL2ltZy5mcmVlcGlrLmNvbS92ZXRvcmVzLXByZW1pdW0vaWx1c3RyYWNhby1kZS1hdmF0YXItZGUtZXN0dWRhbnRlLWljb25lLWRlLXBlcmZpbC1kZS11c3VhcmlvLWF2YXRhci1kZS1qb3ZlbV8xMTgzMzktNDQwMi5qcGcifQ.hKh0eyCsjOSbyfClelJnHzQJfrk2Lm7QDMlRC-rj9R8")
            navigate('/produtos'); 
        }
        else{
            toast.error("Nome ou senha incorreto!")
        }
    };

    return (
        <>
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
            <ToastContainer/>
        </>
    );
}
