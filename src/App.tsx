import { GoogleOAuthProvider } from "@react-oauth/google";
import { Router } from "./Router";

export default function App() {
  return (
      <div className="flex flex-col gap-y-4 items-start justify-center">
        <GoogleOAuthProvider clientId={import.meta.env.VITE_CLIENT_ID as string}>
          <Router />
        </GoogleOAuthProvider>
      </div>
  )
}