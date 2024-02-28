<template>
  <div class="admin-container">
    <navbar v-if="!loading" />
    <Loader v-if="loading" />
    <div class="products" v-else>
      <ProductCard />
    </div>
    <div class="users" v-if="!loading">
      <UsersCard />
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#addProductModal"
      >
        Add Product
      </button>
    </div>

    <!-- Button trigger modal -->

    <!-- Modal -->
    <div
      class="modal fade"
      id="addProductModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Add Product</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <!-- Form for adding a product -->
            <form @submit.prevent="addProduct">
              <div class="mb-3">
                <label for="productName" class="form-label">Product Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="productName"
                  v-model="productName"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="quantity" class="form-label">Quantity</label>
                <input
                  type="number"
                  class="form-control"
                  id="quantity"
                  v-model="quantity"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="productPrice" class="form-label">Price</label>
                <input
                  type="number"
                  class="form-control"
                  id="productPrice"
                  v-model="productPrice"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="category" class="form-label">category</label>
                <input
                  type="text"
                  class="form-control"
                  id="category"
                  v-model="category"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="productUrl" class="form-label">Image Url</label>
                <input
                  type="text"
                  class="form-control"
                  id="productUrl"
                  v-model="productUrl"
                  required
                />
              </div>

              <button type="submit" class="btn btn-primary">Add</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Loader from "@/components/Loader.vue";
import UsersCard from "@/components/UsersCard.vue";
import ProductCard from "@/components/ProductCard.vue";
import navbar from "@/components/nav.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    navbar,
    ProductCard,
    UsersCard,
    Loader,
  },
  data() {
    return {
      loading: true,
      productName: "",
      quantity: "",
      productPrice: "",
      category: "",
      productUrl: "",
    };
  },
  computed: {
    ...mapGetters(["getProducts"]), // Ensure getProducts is correctly mapped
  },
  methods: {
    async fetchProducts() {
      await this.$store.dispatch("getProds");
    },
    async addProduct() {
      const product = {
        productName: this.productName,
        quantity: this.quantity,
        productPrice: this.productPrice,
        category: this.category,
        productUrl: this.productUrl,
      };

      const products = this.getProducts || [];
      const productID = products.length + 1;
      product.productID = productID;

      try {
        await this.$store.dispatch("addProd", {
          productID,
          newProduct: product,
        });
        console.log("Product added successfully");

        this.productName = "";
        this.quantity = "";
        this.productPrice = "";
        this.category = "";
        this.productUrl = "";
      } catch (error) {
        console.error("Error adding product:", error);
      }
    },
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 5000);
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
.users {
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
