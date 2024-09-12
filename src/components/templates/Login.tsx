import LoginForm from "../organisms/LoginForm";
import Tradutor from "../atoms/Tradutor"
import {Logo} from "../atoms/Logo"; 

export default function Login() {
  return (
    <main className="relative flex flex-col items-center justify-center w-full h-screen bg-login bg-cover bg-center">
      <div className="absolute top-4 right-4">
        <Tradutor />
      </div>

      <div className="flex flex-col items-center justify-center bg-custom-green p-8 gap-4 rounded-xl">
        <Logo />
        <LoginForm />
      </div>
    </main>
  );
}
