import { create } from "zustand";

const useStore = create((set) => ({
  products: [],
 addProductToCart: (product) =>
  set((state) => {
    const existingProductIndex = state.products.findIndex((e) => e.id === product.id);
    if (existingProductIndex !== -1) {
      // Update quantity of existing product
      const updatedProducts = [...state.products];
      updatedProducts[existingProductIndex].quantity += product.quantity || 1; // Handle optional quantity
      return { products: updatedProducts };
    } else {
      return { products: [...state.products, product] };
    }
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
