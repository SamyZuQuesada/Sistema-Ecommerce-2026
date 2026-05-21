import { useQuery } from '@tanstack/react-query';
import { getProductById } from '../services/productService';

export const useGetByIdProduct = (id: string | undefined) => {
  return useQuery({
    queryKey: ['products', id],
    queryFn: () => getProductById(id!),
    enabled: !!id,
  });
};