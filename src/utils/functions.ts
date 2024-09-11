export const CHAVE_TOKEN = "@auth/token" 

export function getToken(): string | null {
  const token = localStorage.getItem(CHAVE_TOKEN)
  if(!token){
    return null;
  }
  return token;
}

export function setToken( valor: string) {
  localStorage.setItem(CHAVE_TOKEN, valor)
}

export function removeToken() {
  localStorage.removeItem(CHAVE_TOKEN)
}