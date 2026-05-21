import { useQuery } from "@tanstack/react-query";
import type { CartItemType } from "../types/cartItemType";
import { getCart } from "../services/cartService";

export const useGetCart = () => {
  return useQuery<CartItemType[]>({
    queryKey: ["cart"],
    queryFn: getCart
  });
};
