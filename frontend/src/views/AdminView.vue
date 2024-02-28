<template>
  <div class="admin-container">
    <ProductCard></ProductCard>
  </div>
</template>

<script>
import ProductCard from '../components/ProductCard.vue';

export default {
  components: {
    navbar,
    ProductCard,
    UsersCard,
  },
  computed: {
    ...mapGetters(["getProducts"]), // Ensure getProducts is correctly mapped
    ...mapGetters(["getUsers"]), // Ensure getProducts is correctly mapped
  },
  methods: {
    async fetchProducts() {
      await this.$store.dispatch("getProds");
    },
    async fetchUsers() {
      await this.$store.dispatch("getUsers");
    },
  },
  created() {
    this.fetchUsers(); // Fetch products when the component is created
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