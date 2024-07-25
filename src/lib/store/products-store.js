import { create } from "zustand";
import products from "@/lib/store/products.json";

const useStore = create((set) => ({
  products: [...products],
  addProductToCart: (product) =>
    set((state) => ({
      products: [...state.products, product],
    })),

  removeProductFromCart: (productId) =>
    set((state) => ({
      products: state.products.filter((product) => product.id !== productId),
    })),

  clearCart: () =>
    set(() => ({
      products: [],
    })),
}));

export default useStore;
