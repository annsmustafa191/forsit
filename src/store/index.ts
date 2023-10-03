import { createStore } from "vuex";
import Vue from "vue";

export default createStore({
  state: {
    products: [],
  },
  getters: {
    products(state) {
      return state.products;
    },
  },
  mutations: {
    addProduct(state, newProduct) {
      state.products.push(newProduct);
    },
    updateProduct(state, updatedProduct) {
      const productIndex = state.products.findIndex(
        (product) => product.id === updatedProduct.id
      );
      if (productIndex !== -1) {
        state.products[productIndex] = updatedProduct;
      }
    },
    loadStore() {
      if (localStorage.getItem("store")) {
        try {
          this.replaceState(JSON.parse(localStorage.getItem("store")));
        } catch (e) {
          console.log("Could not initialize store", e);
        }
      }
    },
  },
  actions: {},
  modules: {},
});
