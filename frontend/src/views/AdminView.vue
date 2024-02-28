<template>
  <div class="admin-container">
    <navbar v-if="!loading" />
    <Loader v-if="loading"/>
    <!-- {{products}} -->
    <div class="products" v-else>
      <!-- <ProductCard
      v-for="product of getProducts"
    :key="product.productID"
    :product="product"
      /> -->
      <ProductCard />
    </div>
    <div class="users">
      <UsersCard />
    </div>
  </div>
</template>

<script>
import Loader from '@/components/Loader.vue'
import UsersCard from "@/components/UsersCard.vue";
import ProductCard from "@/components/ProductCard.vue";
import navbar from "@/components/nav.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    navbar,
    ProductCard,
    UsersCard,
    Loader
  },
  data() {
    return {
      loading: true,
    };
  },
  computed: {
    ...mapGetters(["getProducts"]), // Ensure getProducts is correctly mapped
  },
  methods: {
    async fetchProducts() {
      await this.$store.dispatch("getProds");
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
