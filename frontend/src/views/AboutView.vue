<template>
  <div class="row">
      <Navbar :home="true" /> 
    <div class="about col-6">
      <h2>Good Food Alley</h2>
      <p>
        Welcome to Le Petit Italia, an Italian culinary haven <br />
        in the heart of Sicily. Our menu showcases the rich <br />
        diversity of Italian cuisine, from handmade pastas <br />
        to wood-fired pizzas, prepared with the finest <br />
        and freshest ingredients.
      </p>
      <div>
        <p>
          At Le Petit Italia, we are dedicated to providing an <br />
          authentic and memorable dining experience, where the <br />
          warmth of Italian hospitality and the passion of traditional <br />
          cooking come together. Join us to savor the flavors of Italy in <br />
          an inviting ambiance that celebrates la dolce vita.
        </p>
      </div>
    </div>
    <div class="img col-6">
      <img src="https://i.imgur.com/fXczMAK.png" alt="" />
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
  components: {
    Navbar,
  },
};
</script>

<style scoped>
.row {
  margin-top: 10%;
}
h2 {
  margin-left: 100px;
  font-family: 'Alegreya", serif';
  color: black;
}
.about {
  overflow: hidden;
  width: 50%;
}
.img {
  width: 50%;
}
p {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin-left: 80px;
  margin-top: 7%;
  font-size: 19px;
  font-weight: 300;
  font-family: "Fraunces", serif;
  color: black;
}

@media (max-width: 1060px) {
  h2 {
    margin-left: 20px;
  }

  .about {
    overflow-x: hidden;
    margin-left: 0 auto;
    margin-right: 0 auto;
    width: 96%;
  }
  .img {
    margin-left: 30px;
    margin-top: 5%;
    width: 100%;
  }

  p {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    margin-left: 80px;
    width: 100%;
  }
}
</style>
