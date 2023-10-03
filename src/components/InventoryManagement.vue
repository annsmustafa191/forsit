<template>
  <div id="app">
    <b-form-input
      v-model="searchQuery"
      type="text"
      placeholder="Search..."
    ></b-form-input>
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
        <span>{{ data.value }}</span>
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
        <span>{{ data.value }}</span>
      </template>
      <template #cell(category)="data">
        <span>{{ data.value }}</span>
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

export default class InventoryManagement extends Vue {
  allProducts = [];
  perPage = 10;
  currentPage = 1;
  searchQuery = "";
  sortBy = "";

  setup() {
    onMounted(() => {
      console.log("in mounted");
      this.items = store.getters.products;
      this.items = this.items.map((items) => ({
        ...items,
        isEdit: false,
      }));
      console.log(this.items);
    });

    const newItems = computed(() => {
      console.log("in computed");
      const start = (this.currentPage - 1) * this.perPage;
      const end = start + this.perPage;
      return this.items.slice(start, end);
    });

    const filteredProducts = computed(() => {
      let filteredItems = [...this.items];
      if (this.searchQuery) {
        filteredItems = filteredItems.filter((item) =>
          item.title.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      }

      // Sorting logic
      if (this.sortBy) {
        filteredItems.sort((a, b) => {
          const fieldA = a[this.sortBy];
          const fieldB = b[this.sortBy];
          return fieldA.localeCompare(fieldB);
        });
      }

      return filteredItems;
    });

    const lowInventoryProducts = computed(() => {
      // Implement logic to find and filter products with low inventory
      // Return an array of products with low inventory
      return true;
    });
  }

  fields = [
    { key: "id", label: "Id", sortable: false },
    { key: "title", label: "Title", sortable: true },
    { key: "stock", label: "Stock", sortable: true },
    { key: "brand", label: "Brand", sortable: true },
    { key: "category", label: "Category", sortable: true },
    { key: "edit", label: "" },
  ];

  items = [...store.getters.products];

  pagedItems() {
    const start = (this.currentPage - 1) * this.perPage;
    const end = start + this.perPage;
    return this.items.slice(start, end);
  }

  editRowHandler(data) {
    console.log(data);
    this.items[data.index].isEdit = !this.items[data.index].isEdit;
  }

  // filteredProducts() {
  //   // Implement filtering and sorting logic based on sortOption and searchQuery
  //   // Return a filtered and sorted array of products
  // }
  // lowInventoryProducts() {
  //   // Implement logic to find and filter products with low inventory
  //   // Return an array of products with low inventory
  // }

  updateInventory(product) {
    // Implement inventory update logic here
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
