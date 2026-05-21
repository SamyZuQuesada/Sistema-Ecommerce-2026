import { create } from 'zustand';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  total: number;
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  calculateTotal: () => number;
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  total: 0,

  addItem: (item) =>
    set((state) => {
      const existingItem = state.items.find((i) => i.id === item.id);
      let updatedItems: CartItem[];

      if (existingItem) {
        updatedItems = state.items.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
        );
      } else {
        updatedItems = [...state.items, item];
      }

      return {
        items: updatedItems,
        total: get().calculateTotal(),
      };
    }),

  removeItem: (id) =>
    set((state) => {
      const updatedItems = state.items.filter((item) => item.id !== id);
      return {
        items: updatedItems,
        total: get().calculateTotal(),
      };
    }),

  updateQuantity: (id, quantity) =>
    set((state) => {
      const updatedItems = state.items.map((item) =>
        item.id === id ? { ...item, quantity } : item
      );
      return {
        items: updatedItems,
        total: get().calculateTotal(),
      };
    }),

  clearCart: () =>
    set({
      items: [],
      total: 0,
    }),

  calculateTotal: () => {
    const state = get();
    return state.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  },
}));
