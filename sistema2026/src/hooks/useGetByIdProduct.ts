import { useQuery } from '@tanstack/react-query';
import { getProductById } from '../services/productService';
import { productKey } from '../constants/keyConstants';

export const useGetByIdProduct = (id: string | undefined) => {
  return useQuery({
    queryKey: [productKey, id],
    queryFn: () => getProductById(id!),
    enabled: !!id,
  });
};
