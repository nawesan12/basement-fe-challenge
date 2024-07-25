import { create } from "zustand";

const useStore = create((set) => ({
  products: [],
  addProductToCart: (product) =>
    set((state) => {
      if(state.products.some((e) => e.id === product.id)) {
        const existingProductIndex = products.findIndex((e) => e.id === product.id)
        state.products[existingProductIndex] = product
      }
      
      return [...state.products, product]
    }),
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
