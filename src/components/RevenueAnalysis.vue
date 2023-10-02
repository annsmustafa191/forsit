<template>
  <div id="app">
    <b-table :items="items" :fields="fields">
      <template #cell(id)="data">
        <span>{{ data.value }}</span>
      </template>
      <template #cell(title)="data">
        <b-form-input
          v-if="items[data.index].isEdit"
          type="text"
          v-model="items[data.index].title"
        ></b-form-input>
        <span v-else>{{ data.value }}</span>
      </template>
      <template #cell(description)="data">
        <b-form-input
          v-if="items[data.index].isEdit"
          v-model="items[data.index].description"
          type="text"
        ></b-form-input>
        <span v-else>{{ data.value }}</span>
      </template>
      <template #cell(stock)="data">
        <b-form-input
          v-if="items[data.index].isEdit"
          type="number"
          v-model="items[data.index].stock"
        ></b-form-input>
        <span v-else>{{ data.value }}</span>
      </template>
      <template #cell(brand)="data">
        <b-form-input
          v-if="items[data.index].isEdit"
          type="text"
          v-model="items[data.index].brand"
        ></b-form-input>
        <span v-else>{{ data.value }}</span>
      </template>
      <template #cell(category)="data">
        <b-form-input
          v-if="items[data.index].isEdit"
          type="text"
          v-model="items[data.index].category"
        ></b-form-input>
        <span v-else>{{ data.value }}</span>
      </template>
      <template #cell(edit)="data">
        <b-button @click="editRowHandler(data)">
          <span v-if="!items[data.index].isEdit">Edit</span>
          <span v-else>Done</span>
        </b-button>
      </template>
    </b-table>
    <pre>
      {{ items }}
    </pre>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { onMounted } from "vue";
import store from "@/store";

export default class RevenueAnalysis extends Vue {
  allProducts = [];

  setup() {
    onMounted(() => {
      this.allProducts = store.getters.products;
      this.allProducts = this.allProducts.map((allProducts) => ({
        ...allProducts,
        isEdit: false,
      }));
      console.log(this.allProducts);
    });
  }
  fields = [
    { key: "id", label: "Id" },
    { key: "title", label: "Title" },
    { key: "description", label: "Description" },
    { key: "stock", label: "Stock" },
    { key: "brand", label: "Brand" },
    { key: "category", label: "Category" },
    { key: "edit", label: "" },
  ];

  items = [...this.allProducts];

  editRowHandler(data) {
    console.log(data);
    this.items[data.index].isEdit = !this.items[data.index].isEdit;
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
