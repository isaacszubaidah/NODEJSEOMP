<template>
  <div class="menue-container vh-100">
    <navbar />
    <!-- Search input field -->
    <div class="products">
      <input
        type="text"
        v-model="searchQuery"
        placeholder="Search by product name"
      />
      <Card
        v-for="product of filteredProducts"
        :key="product.productID"
        :product="product"
      />
    </div>
  </div>
</template>

<script>
import navbar from "@/components/nav.vue";
import Card from "@/components/Card.vue";
export default {
  components: {
    navbar,
    Card,
  },
  data() {
    return {
      searchQuery: "",
    };
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
    // Filtered products based on search query
    filteredProducts() {
      if (!this.searchQuery) {
        return this.products;
      } else {
        return this.products.filter(
          (product) =>
            product.productName &&
            product.productName
              .toLowerCase()
              .includes(this.searchQuery.toLowerCase())
        );
      }
    },
  },
  // mounted() {
  //   this.$store.dispatch("display");
  // },
};
</script>

<style scoped>
.products {
  margin-top: 7%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  max-width: 1220px;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding-bottom: 60px;
}
</style>
