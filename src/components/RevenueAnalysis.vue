<template>
  <div id="app">
    <b-table
      :items="items"
      :fields="fields"
      :per-page="perPage"
      :current-page="currentPage"
    >
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
    <b-pagination
      v-model="currentPage"
      :total-rows="items.length"
      :per-page="perPage"
      aria-controls="itemList"
      align="center"
    ></b-pagination>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { onMounted, computed } from "vue";
import store from "@/store";
import data from "../data/sales-data";

export default class RevenueAnalysis extends Vue {
  allProducts = [];
  perPage = 10;
  currentPage = 1;
  setup() {
    onMounted(() => {
      console.log("in mounted");
      this.allProducts = store.getters.products;
      this.allProducts = this.allProducts.map((allProducts) => ({
        ...allProducts,
        isEdit: false,
      }));
      console.log(this.allProducts);
    });

    const newItems = computed(() => {
      console.log("in computed");

      const start = (this.currentPage - 1) * this.perPage;
      const end = start + this.perPage;
      return this.items.slice(start, end);
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

  items = [...data];

  pagedItems() {
    const start = (this.currentPage - 1) * this.perPage;
    const end = start + this.perPage;
    return this.items.slice(start, end);
  }

  editRowHandler(data) {
    console.log(data);
    this.items[data.index].isEdit = !this.items[data.index].isEdit;
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
