import { useMutation } from "@tanstack/react-query";
import type { CartItemType } from "../types/cartItemType";
import { createCart } from "../services/cartService";

export const useCreateCart = () => {
  return useMutation({
    mutationFn: (cart: CartItemType) => createCart(cart)
  });
};
