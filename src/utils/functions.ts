import { Product } from "./interfaces";

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

export function saveFavoriteItemInLocalStorage(product: Product) {
	const favoriteItems = getFavoriteItemsFromLocalStorage() || [];
	const isProductFavorite = favoriteItems.some(item => item.id === product.id);

	if (!isProductFavorite) {
		favoriteItems.push(product);
		localStorage.setItem("@favorite/items", JSON.stringify(favoriteItems));
	}
}
  
export function getFavoriteItemsFromLocalStorage(): Product[] | null {
	const itemsFromLS = localStorage.getItem("@favorite/items");
	if (!itemsFromLS) return null;
	return JSON.parse(itemsFromLS);
}
  
export function removeFavoriteItemFromLocalStorage(productId: number) {
	const favoriteItems = getFavoriteItemsFromLocalStorage();
	if (!favoriteItems) return;
	const updatedItems = favoriteItems.filter(item => item.id !== productId);
	localStorage.setItem("@favorite/items", JSON.stringify(updatedItems));
}