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
import { useTranslation } from 'react-i18next';

export default function LoginForm() {
    const { t } = useTranslation();
    const { register, handleSubmit } = useForm<LoginValues>();
    const navigate = useNavigate();
    
    const { loading, status, error } = useSelector((state: RootState) => state.user);
    
    const user:LoginValues = {
        email: "alisson@email.com",
        password: "Alisson@7",
    }

    const onSubmit: SubmitHandler<LoginValues> = async (data) => {
        if(user.password === user.password && data.email === user.email){
            setToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFsaXNzb25AZW1haWwuY29tIiwicGFzc3dvcmQiOiJBbGlzc29uQDciLCJwaWN0dXJlIjo"+
                "iaHR0cHM6Ly9pbWcuZnJlZXBpay5jb20vdmV0b3Jlcy1wcmVtaXVtL2lsdXN0cmFjYW8tZGUtYXZhdGFyLWRlLWVzdHVkYW50ZS1pY29uZS1kZS1wZXJmaWwtZGUtdXN"
                + "1YXJpby1hdmF0YXItZGUtam92ZW1fMTE4MzM5LTQ0MDIuanBnIn0.ezh709WxTQUhro5gygBbOTW9Wnv2mySzgy7CHnjdHV4")
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
                    input={{ name: "email", placeholder: "user@email.com", type: "email" }} 
                    label={{ htmlfor: "email", label: `${t('emailLabel')}`}} 
                    register={register}
                />

                <InputWithLabel 
                    input={{ name: "password", placeholder: "*******", type: "password" }} 
                    label={{ htmlfor: "password", label: `${t('senhaLabel')}` }} 
                    register={register}
                />

                {loading && <p>Carregando...</p>}
                {status === 'failed' && <p className="text-red-500">{error}</p>}
                
                <Button type="submit" text={t('buttonLogin')} />

                <ButtonGoogleLogin />
            </form> 
            <ToastContainer/>
        </>
    );
}
