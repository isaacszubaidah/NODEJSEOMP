<template>
  <div class="container vh-100">
  <img class="breath-in" src="https://i.imgur.com/k32yIap.png" alt="">
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/* h1{
    display: flex;
    align-items: center;
    text-align: center;
    left: 0;
    right: 0;
    justify-content: center;
    font-size: 40px;
    font-weight: 300;
    font-family: "Fraunces", serif;
    color: white;
} */
img {
    margin-top: 10%;
} 
.breath-in {
    animation: breathInAnimation 2s ease-in-out infinite;
  }

  @keyframes breathInAnimation {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(0.8);
    }
  }
</style>
