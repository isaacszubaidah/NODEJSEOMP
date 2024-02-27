<template>
  <div class="admin-container">
    <navbar v-if="!loading" />
    <spinner class="spinner" v-if="loading"/>
    <!-- {{products}} -->
    <div class="products" v-else>
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
import spinner from "@/components/Spinner.vue"
export default {
  components: {
    navbar,
    ProductCard,
    spinner
  },
  data() {
    return{
      loading:true,
    };
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
  },

  mounted() {
    this.$store.dispatch("display");
    setTimeout(() => {
      this.loading = false;
    }, 6000);
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

.spinner{
background-color: black;
width: 100%;
}
</style>
