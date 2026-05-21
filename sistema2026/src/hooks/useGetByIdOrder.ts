import { useQuery } from "@tanstack/react-query";
import type { OrderType } from "../types/orderType";
import { getOrderById } from "../services/orderService";

export const useGetByIdOrder = (id: number | undefined) => {
  return useQuery({
    queryKey: ["orders", id],
    queryFn: () => getOrderById(id!),
    enabled: !!id
  });
};
