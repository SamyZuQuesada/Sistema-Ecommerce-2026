import { useQuery } from "@tanstack/react-query";
import type { ProductType } from "../types/productType";
import { getProducts } from "../services/productService";
import { productsKey } from "../constants/keyConstants";

export const useGetProducts = () => {
  return useQuery<ProductType[]>({
    queryKey: [productsKey],
    queryFn: getProducts
  });
};
