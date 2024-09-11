export const CHAVE_TOKEN = "@auth/token" 
export const CHAVE_GOOGLE_TOKEN = "@auth/google"

export function getToken(): string | null {
  const token = localStorage.getItem(CHAVE_TOKEN)
  if(!token){
    return null;
  }
  return token;
}

export function getGoogleToken(): string | null {
	const token = localStorage.getItem(CHAVE_GOOGLE_TOKEN)
	if(!token){
	  return null;
	}
	return token;
}

export function setToken( valor: string) {
  localStorage.setItem(CHAVE_TOKEN, valor)
}

export function setGoogleToken ( valor: string){
	localStorage.setItem(CHAVE_GOOGLE_TOKEN, valor)
}

export function removeToken() {
  localStorage.removeItem(CHAVE_TOKEN)
}

export function removeGoogleToken() {
	localStorage.removeItem(CHAVE_GOOGLE_TOKEN)
}