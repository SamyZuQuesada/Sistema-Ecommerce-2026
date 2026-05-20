import type { ProductType } from "./productType";

export type CartItemType = {
    product: ProductType;
    quantity: number;
}