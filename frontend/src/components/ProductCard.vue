<template>
  <div>
    <h2>Products</h2>
    <table>
      <thead>
        <tr>
          <th>Product ID</th>
          <th>Product Name</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Category</th>
          <th>Product Image</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in getProducts" :key="product.id">
          <td>{{ product.productID }}</td>
          <td>{{ product.productName }}</td>
          <td>{{ product.quantity }}</td>
          <td>R{{ product.productPrice }}</td>
          <td>{{ product.category }}</td>
          <td><img :src="product.productUrl" /></td>
          <td>
            <button
              type="button"
              class="btn btn-primary"
              data-bs-toggle="modal"
              :data-bs-target="'#editModal' + product.productID"
            >
              Edit
            </button>
          </td>
          <td>
            <button
              type="button"
              class="btn btn-dark"
              @click="delProduct(product.productID)"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Modals -->
    <div v-for="product in getProducts" :key="product.id">
      <div
        class="modal fade"
        :id="'editModal' + product.productID"
        tabindex="-1"
        aria-labelledby="'editModalLabel' + product.productID"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5
                class="modal-title"
                :id="'editModalLabel' + product.productID"
              >
                Edit Product
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <input
                type="text"
                v-model="product.productName"
                placeholder="Product Name"
              />
              <input
                type="text"
                v-model="product.quantity"
                placeholder="Quantity"
              />
              <input
                type="text"
                v-model="product.productPrice"
                placeholder="Product Price"
              />
              <input
                type="text"
                v-model="product.category"
                placeholder="Category"
              />
              <input
                type="text"
                v-model="product.productUrl"
                placeholder="Image URL"
              />
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-primary"
                @click="updateProduct(product)"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getProducts"]),
  },
  methods: {
    async fetchProducts() {
      await this.$store.dispatch("getProds");
    },
    async delProduct(productID) {
      await this.$store.dispatch("delProduct", productID);
    },
    async updateProduct(product) {
      try {
        await this.$store.dispatch("editProd", product);
        console.log("Product updated successfully");
      } catch (error) {
        console.error("Error updating product:", error);
      }
    },
  },
  created() {
    this.fetchProducts();
  },
};
</script>
<style scoped>
.products {
  margin-top: 7%;
  display: flex;
  flex-wrap: wrap;
  max-width: 1220px;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding-bottom: 60px;
}
table {
  width: 100%;
  border-collapse: collapse;
}

th {
  background-color: lightgray;
}

th,
td {
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

tr:hover {
  background-color: #f2f2f2;
}

img {
  width: 150px;
  height: 150px;
}
</style>
