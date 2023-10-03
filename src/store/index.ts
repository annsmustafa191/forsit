import { createStore } from "vuex";
import { data } from "../data/sales-data";

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
