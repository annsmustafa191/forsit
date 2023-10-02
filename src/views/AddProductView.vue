<template>
  <AddProductForm @addProduct="addProductToInventory"></AddProductForm>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import AddProductForm from "@/components/AddProductForm.vue";
import store from "@/store";

@Options({
  components: {
    AddProductForm,
  },
})
export default class AddProductView extends Vue {
  addProductToInventory(newProduct: any) {
    store.commit("addProduct", newProduct);
    let allProducts = JSON.stringify(store.getters.products);
    console.log(allProducts);
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
