<template>
<div class="row">
    <div class="col-4 card-container">
        <div class="card">
            <img :src="product.productUrl" class="card-img-top" alt="">
            <div class="card-body">
            <h5 class="card-title">{{ product.productID }}</h5>
            <p class="card-text">{{ product.productName }}</p>
          </div>

        </div>

    </div>

</div>
</template>


<script>
export default {
  props: ["product"],
};
</script>

<style scoped>
img{
    height: 200px;
}
.card-title {
  font-weight: bold;
  font-family: "Playfair Display", serif;
  color: #5e5343;
}
.card-text {
  font-size: 14px;
  padding-top: 5px;
  height: 80px;
}

.row {
  margin: 0 auto;
}
.card {
  width: 14rem;
  height: 24rem;
  box-shadow: 10px 10px 5px grey;
  border-radius: 10px;
  padding: 16px;
  transition: transform 0.3s ease-in-out;
}

.card-container:hover .card {
  transform: translateY(-10px);
}

</style>