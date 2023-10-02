<template>
  <div class="product-form">
    <h2>Add New Product</h2>
    <form @submit.prevent="addProduct">
      <div class="form-group">
        <label for="productName">Product Name:</label>
        <input type="text" id="productName" v-model="productName" required />
      </div>
      <div class="form-group">
        <label for="description">Description:</label>
        <textarea id="description" v-model="description" required></textarea>
      </div>
      <div class="form-group">
        <label for="price">Price:</label>
        <input type="number" id="price" v-model="price" required />
      </div>
      <div class="form-group">
        <label for="initialStock">Initial Stock Level:</label>
        <input
          type="number"
          id="initialStock"
          v-model="initialStock"
          required
        />
      </div>
      <div class="form-group">
        <label for="productImage">Product Image:</label>
        <input
          type="file"
          id="productImage"
          @change="handleImageUpload"
          accept="image/*"
        />
        <img
          v-if="imagePreview"
          :src="imagePreview"
          alt="Product Preview"
          class="image-preview"
        />
      </div>
      <button type="submit">Add Product</button>
    </form>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
export default class AddProductForm extends Vue {
  productName = "";
  description = "";
  price = 0;
  initialStock = 0;
  productImage = null;
  imagePreview = null;

  addProduct() {
    const newProduct = {
      name: this.productName,
      description: this.description,
      price: this.price,
      initialStock: this.initialStock,
      image: this.productImage,
    };

    this.$emit("add-product", newProduct);
    this.resetForm();
  }

  resetForm() {
    this.productName = "";
    this.description = "";
    this.price = 0;
    this.initialStock = 0;
    this.productImage = null;
    this.imagePreview = null;
  }

  handleImageUpload(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.productImage = file;
      this.imagePreview = URL.createObjectURL(file);
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.product-form {
  width: 300px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 10px;
}

label {
  font-weight: bold;
}

input[type="text"],
input[type="number"],
textarea {
  width: 100%;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

button[type="submit"] {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
}

button[type="submit"]:hover {
  background-color: #0056b3;
}
</style>
