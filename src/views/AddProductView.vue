<template>
  <AddProductForm @addProduct="addProductToInventory"></AddProductForm>
  <button @click="tester()">Add Data Via API</button>
  <button @click="getVuex()">Check vuex data</button>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import AddProductForm from "@/components/AddProductForm.vue";
import store from "@/store";
import axios from "axios";

@Options({
  components: {
    AddProductForm,
  },
})
export default class AddProductView extends Vue {
  AuthStr =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsInVzZXJuYW1lIjoia21pbmNoZWxsZSIsImVtYWlsIjoia21pbmNoZWxsZUBxcS5jb20iLCJmaXJzdE5hbWUiOiJKZWFubmUiLCJsYXN0TmFtZSI6IkhhbHZvcnNvbiIsImdlbmRlciI6ImZlbWFsZSIsImltYWdlIjoiaHR0cHM6Ly9yb2JvaGFzaC5vcmcvYXV0cXVpYXV0LnBuZz9zaXplPTUweDUwJnNldD1zZXQxIiwiaWF0IjoxNjM1NzczOTYyLCJleHAiOjE2MzU3Nzc1NjJ9.n9PQX8w8ocKo0dMCw3g8bKhjB8Wo7f7IONFBDqfxKhs";
  addProductToInventory(newProduct: any) {
    console.log(newProduct);

    store.commit("addProduct", newProduct);
  }

  async tester() {
    let products = await axios
      .get("https://dummyjson.com/products?limit=0", {
        headers: { Authorization: this.AuthStr },
      })
      .then((data) => {
        for (const id in data.data.products) {
          store.commit("addProduct", data.data.products[id]);
        }
      });
  }

  getVuex() {
    console.log("data from store", store.getters.products);
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
  margin-top: 20px;
  border-radius: 10px;
  color: aliceblue;
  background-color: rgb(1, 115, 245);
}
</style>
