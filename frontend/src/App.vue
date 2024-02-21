<template>
<Navbar/>
  <router-view/>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
export default{
  components:{
    Navbar
  },
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* background: ; */
}

/* nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
} */

nav a.router-link-exact-active {
    font-size: 18px;
    gap: 20px;
    font-family: 'Alegreya", serif';
    color: white;
}

.logo{
  width: 90px;
  height:70px;
  border-radius: 90px;
}
</style>
