import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import BootstrapVue3 from "bootstrap-vue-3";

// Since every component imports their Bootstrap functionality,
// the following line is not necessary:
// import 'bootstrap'

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";

store.subscribe((mutation, state) => {
  // The code inside the curly brackets fires any time a mutation occurs.
  // When a mutation occurs, we'll stringify our entire state object - which
  // contains our todo list. We'll put it in the users localStorage, so that
  // their data will persist even if they refresh the page.
  localStorage.setItem("store", JSON.stringify(state));
});

createApp(App).use(store).use(router).use(BootstrapVue3).mount("#app");
