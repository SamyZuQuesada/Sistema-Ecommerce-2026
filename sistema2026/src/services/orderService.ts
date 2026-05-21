import type { OrderType } from "../types/orderType";
import axiosInstance from "../config/axios";

const API_ENDPOINT = "/orders";

/* Obtiene todas las ordenes */
export const getOrders = async (): Promise<OrderType[]> => {
  const response = await axiosInstance.get<OrderType[]>(API_ENDPOINT);
  return response.data;
};

/* Obtiene una orden por ID */
export const getOrderById = async (id: number): Promise<OrderType> => {
  const response = await axiosInstance.get<OrderType>(`${API_ENDPOINT}/${id}`);
  return response.data;
};

/* Crea una nueva orden */
export const createOrder = async (order: Omit<OrderType, 'id' | 'createdAt'>): Promise<OrderType> => {
  const response = await axiosInstance.post<OrderType>(API_ENDPOINT, order);
  return response.data;
};
