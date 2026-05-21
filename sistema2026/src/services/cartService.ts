import type { CartItemType } from "../types/cartItemType";
import axiosInstance from "../config/axios";

const API_ENDPOINT = "/cart";

/* Obtiene el carrito */
export const getCart = async (): Promise<CartItemType[]> => {
  const response = await axiosInstance.get<CartItemType[]>(API_ENDPOINT);
  return response.data;
};

/* Crea un carrito */
export const createCart = async (cart: CartItemType): Promise<CartItemType> => {
  const response = await axiosInstance.post<CartItemType>(API_ENDPOINT, cart);
  return response.data;
};
