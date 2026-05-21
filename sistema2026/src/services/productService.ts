import type { ProductType } from "../types/productType";
import axiosInstance from "../config/axios";

const API_ENDPOINT = "/products";

/* Obtiene todos los productos*/
export const getProducts = async (): Promise<ProductType[]> => {
  const response = await axiosInstance.get<ProductType[]>(API_ENDPOINT);
  return response.data;
};

/*Obtiene un producto por ID*/
export const getProductById = async (id: string): Promise<ProductType> => {
  const response = await axiosInstance.get<ProductType>(`${API_ENDPOINT}/${id}`);
  return response.data;
};