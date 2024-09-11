import LoginForm from "../organisms/LoginForm";

export default function Login (){
    return(
        
        <main className="flex flex-col items-center justify-center w-full h-screen">
            <div className="flex flex-col items-center justify-center bg-custom-green p-8 gap-4 rounded-xl">
                <h1 className="poppins-semibold text-3xl text-custom-black text-white">Login</h1>
                <LoginForm/>
            </div>
        </main>
       
    )
}