<template>
  <div class="admin-container">
    <navbar />
    <!-- {{products}} -->
    <div class="products">
      <ProductCard
        v-for="product of products"
        :key="product.productID"
        :product="product"
      />
    </div>
    <!-- <div class="table">
    <th>ID</th>
    <th>Name</th>
    <th>Category</th>
    
    <ProductCard v-for="item in $store.state.products" :key="item.productID">
        <td>{{ item.productIDid }}</td>
        <td>{{ item.productName }}</td>
        <td>{{ item.category }}</td>
    </ProductCard>
   
</div> -->
  </div>
</template>

<script>
import navbar from "@/components/nav.vue";
import ProductCard from "@/components/ProductCard.vue";
export default {
  components: {
    navbar,
    ProductCard,
  },
  data() {
    return {
      //   products: null,
    };
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
  },

  mounted() {
    this.$store.dispatch("display");
  },
  //   components: { ProductCard },
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
</style>
