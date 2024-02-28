<template>
  <div class="menu-container vh-100">
    <navbar />
    <div class="sortfilter">
      <div class="sort-controls">
        <select v-model="sortBy">
          <option value="">Sort By</option>
          <option value="category">Category</option>
          <option value="priceLowToHigh">Price Low to High</option>
          <option value="priceHighToLow">Price High to Low</option>
        </select>
      </div>
      <input
        type="text"
        v-model="searchQuery"
        placeholder="Search by product name"
      />
    </div>
    <div class="products">
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
      sortBy: "", // store current sort option
    };
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
    filteredProducts() {
      let filtered = this.products;
      if (this.searchQuery) {
        filtered = filtered.filter(
          (product) =>
            product.productName &&
            product.productName
              .toLowerCase()
              .includes(this.searchQuery.toLowerCase())
        );
      }
      if (this.sortBy === "category") {
        // Sort by category
        filtered = filtered.sort((a, b) => {
          const categoryOrder = { "Main": 1, "Starter": 2, "Dessert": 3 };
          return categoryOrder[a.category] - categoryOrder[b.category];
        });
      } else if (this.sortBy === "priceLowToHigh") {
        filtered = filtered.sort((a, b) => a.productPrice - b.productPrice);
      } else if (this.sortBy === "priceHighToLow") {
        filtered = filtered.sort((a, b) => b.productPrice - a.productPrice);
      }
      return filtered;
    },
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

.sortfilter {
  margin-bottom: 20px;
  margin-top: 100px;
  display: flex;
  align-items: center; 
  justify-content: center;
  gap: 16px;
}

.sort-controls select {
  padding: 5px;
  font-size: 16px;
}
</style>
