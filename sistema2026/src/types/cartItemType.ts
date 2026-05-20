import type { ProductType } from "./productType";

export type CartItemType = {
    price: number;
    product: ProductType;
    quantity: number;
}