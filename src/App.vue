<template>
  <nav>
    <router-link to="/revenue-analysis">Revenue Analysis</router-link>| |
    <router-link to="/inventory-management">Inventory Management</router-link> |
    |
    <router-link to="/add-product">Add Product</router-link>
  </nav>
  <router-view />
</template>
<script>
import { useStore } from "vuex";
export default {
  beforeCreate() {
    const store = useStore();
    store.commit("loadStore");
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
