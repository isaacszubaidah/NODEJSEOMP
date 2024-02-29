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
          <th>Add</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in getProducts" :key="product.productID">
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
          <td></td>
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
    <div v-for="product in getProducts" :key="product.productID">
      <div
        class="modal fade"
        :id="'editModal' + product.productID"
        tabindex="-1"
        aria-labelledby="'editModalLabel' + product.productID"
        aria-hidden="true"
      >
        <!-- Edit Modal content -->
        <div class="modal-dialog">
          <div class="modal-content">
            <!-- Edit Modal header -->
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
            <!-- Edit Modal body -->
            <div class="modal-body">
              <!-- Edit Modal inputs -->
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
            <!-- Edit Modal footer -->
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
                @click="updateProduct(product.productID)"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Add Modal -->
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {};
  },
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
    async updateProduct(productID) {
      const product = this.getProducts.find(p => p.productID === productID);
      try {
        await this.$store.dispatch("editProd", { productID, updatedProduct: product });
        console.log("Product updated successfully");
      } catch (error) {
        console.error("Error updating product:", error);
      }
    },
    async newProduct(product) {
      try {
        await this.$store.dispatch("addProd", product);
        console.log("Product added successfully");
      } catch (error) {
        console.error("Error adding product:", error);
      }
    },
  },
  created() {
    this.fetchProducts();
  },
};
</script>


<style scoped>
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
