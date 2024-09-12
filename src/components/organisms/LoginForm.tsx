import { useForm, SubmitHandler } from "react-hook-form";
import InputWithLabel from "../molecules/InputWithLabel";
import { Button, ButtonGoogleLogin } from "../atoms/Button";
import { LoginValues, Usuario } from "../../utils/interfaces";
import {  useDispatch, useSelector } from 'react-redux';
import {  RootState } from '../../store/store';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { setToken } from "../../utils/functions";
import { useTranslation } from 'react-i18next';
import { jwtDecode } from "jwt-decode";
import { setUser } from '../../slice/loginSlice';

export default function LoginForm() {
    const { t } = useTranslation();
    const { register, handleSubmit } = useForm<LoginValues>();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { loading, status, error } = useSelector((state: RootState) => state.user);
    
    const user:LoginValues = {
        email: "alisson@email.com",
        password: "Alisson@7",
    }

    const onSubmit: SubmitHandler<LoginValues> = async (data) => {
        if(user.password === user.password && data.email === user.email){
            const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQWxpc3NvbiBGZXJuYW5kZXMiLCJlbWFpbCI6ImFsaXN" +
            "zb25AZW1haWwuY29tIiwicGljdHVyZSI6Imh0dHBzOi8vaW1nLmZyZWVwaWsuY29tL3ZldG9yZXMtcHJlbWl1bS9pbHVzdHJhY2FvLWRlLWF2" +
            "YXRhci1kZS1lc3R1ZGFudGUtaWNvbmUtZGUtcGVyZmlsLWRlLXVzdWFyaW8tYXZhdGFyLWRlLWpvdmVtXzExODMzOS00NDAyLmpwZyJ9.6lWP1e3GZOZoLHW5dJW0ic_hsl-3mmh9FFRkaFwb7dY"
            
            setToken(token)

            const decoded: Usuario = jwtDecode(token);
                dispatch(setUser({
                  name: decoded.name,
                  email: decoded.email,
                  picture: decoded.picture
                }));

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
