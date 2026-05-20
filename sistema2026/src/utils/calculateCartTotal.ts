// Sirve para calcular el total del carrito

import type { CartItemType } from "../types/cartItemType";

export function calculateCartTotal(items: CartItemType[]): number {
  return items.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
}