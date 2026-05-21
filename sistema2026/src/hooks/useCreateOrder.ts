import { useMutation } from "@tanstack/react-query";
import type { OrderType } from "../types/orderType";
import { createOrder } from "../services/orderService";

export const useCreateOrder = () => {
  return useMutation({
    mutationFn: (order: Omit<OrderType, 'id' | 'createdAt'>) => createOrder(order)
  });
};
