import { useQuery } from "@tanstack/react-query";
import type { OrderType } from "../types/orderType";
import { getOrders } from "../services/orderService";

export const useGetOrders = () => {
  return useQuery<OrderType[]>({
    queryKey: ["orders"],
    queryFn: getOrders
  });
};
