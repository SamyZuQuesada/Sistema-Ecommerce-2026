import { useQuery } from "@tanstack/react-query";
import type { CartItemType } from "../types/cartItemType";
import { getCart } from "../services/cartService";
import { cartKey } from "../constants/keyConstants";

export const useGetCart = () => {
  return useQuery<CartItemType[]>({
    queryKey: [cartKey],
    queryFn: getCart
  });
};
