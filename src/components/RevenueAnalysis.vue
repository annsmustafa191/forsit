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

export default class RevenueAnalysis extends Vue {
  perPage = 10;
  currentPage = 1;
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
      const start = (this.currentPage - 1) * this.perPage;
      const end = start + this.perPage;
      return this.items.slice(start, end);
    });
  }

  fields = [
    { key: "id", label: "Id", sortable: false },
    { key: "title", label: "Title", sortable: false },
    { key: "description", label: "Description", sortable: false },
    { key: "stock", label: "Stock", sortable: false },
    { key: "brand", label: "Brand", sortable: false },
    { key: "category", label: "Category", sortable: false },
    { key: "edit", label: "" },
  ];

  items = [...store.getters.products];

  get pagedItems() {
    const start = (this.currentPage - 1) * this.perPage;
    const end = start + this.perPage;
    return this.items.slice(start, end);
  }

  editRowHandler(data) {
    const updatedProduct = {
      title: data.item.title,
      description: data.item.description,
      stock: data.item.stock,
      brand: data.item.brand,
      category: data.item.category,
    };
    store.commit("updateProduct", updatedProduct);
    this.items[data.index].isEdit = !this.items[data.index].isEdit;
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.table {
  width: 100%;
  margin-bottom: 1rem;
  background-color: transparent;
  border-collapse: collapse;
}

.table th,
.table td {
  padding: 0.75rem;
  vertical-align: top;
  border-top: 1px solid #dee2e6;
}

.table thead th {
  vertical-align: bottom;
  border-bottom: 2px solid #dee2e6;
}

.table th.sortable.active {
  background-color: #f8f9fa;
}

.b-form-input {
  margin-bottom: 10px;
}

.b-pagination {
  margin-top: 10px;
  display: flex;
  justify-content: center;
}
</style>
