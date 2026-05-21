import { useQuery } from "@tanstack/react-query";
import type { ProductType } from "../types/productType";
import { getProducts } from "../services/productService";

export const useGetProducts = () => {
  return useQuery<ProductType[]>({
    queryKey: ["products"],
    queryFn: getProducts
  });
};