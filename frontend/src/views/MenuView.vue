<template>
  <div class="menue-container vh-100">
    <navbar />

    <div class="products">
      <Card
        v-for="product of getCategory"
        :key="product.productID"
        :product="product"
      />
    </div>
  </div>
</template>

<script>
import navbar from "@/components/nav.vue";
import Card from "@/components/Card.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    navbar,
    Card,
  },
  computed: {
    ...mapGetters(["getCategory"]),
  },
  methods: {
    async fetchProducts() {
      const catergoryAactive = this.$route.params.catergory;
      this.$store.dispatch("getProdCategory", catergoryAactive);
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
</style>
