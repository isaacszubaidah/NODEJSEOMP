<template>
  <div>
    <div v-for="product in getProduct" :key="product.id">
      <div>
        <img :src="product.productUrl" alt="">
        <p>{{ product.productName }} </p>
        <p>R{{ product.productPrice}} </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getProduct"]),
  },
  methods: {
    async fetchProducts() {
      const productId = this.$route.params.productId;
      this.$store.dispatch("getProdById", productId);
    },
  },
  created() {
    this.fetchProducts();
  },
};
</script>

<style></style>
