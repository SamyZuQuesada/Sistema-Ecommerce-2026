import { create } from 'zustand';

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
}

interface ProductState {
  products: Product[];
  selectedProduct: Product | null;
  setProducts: (products: Product[]) => void;
  setSelectedProduct: (product: Product | null) => void;
  addProduct: (product: Product) => void;
  removeProduct: (id: string) => void;
}

export const useProductStore = create<ProductState>((set) => ({
  products: [],
  selectedProduct: null,

  setProducts: (products) =>
    set({
      products,
    }),

  setSelectedProduct: (product) =>
    set({
      selectedProduct: product,
    }),

  addProduct: (product) =>
    set((state) => ({
      products: [...state.products, product],
    })),

  removeProduct: (id) =>
    set((state) => ({
      products: state.products.filter((p) => p.id !== id),
    })),
}));
