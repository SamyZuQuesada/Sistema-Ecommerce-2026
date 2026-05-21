import { useQuery } from "@tanstack/react-query";
import type { OrderType } from "../types/orderType";
import { getOrders } from "../services/orderService";
import { ordersKey } from "../constants/keyConstants";

export const useGetOrders = () => {
  return useQuery<OrderType[]>({
    queryKey: [ordersKey],
    queryFn: getOrders
  });
};
