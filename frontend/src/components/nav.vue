<template>
    <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        <router-link class="nav-link active" aria-current="page" to="/"
          ><img
            class="logo"
            src="https://i.imgur.com/zkMo7Zp.png"
            alt=""
        /></router-link>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 centerNav">
        <li class="nav-item">
          <router-link class="nav-link active" aria-current="page" to="/">Home  |</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link active" aria-current="page" to="/about">About  |</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link active" aria-curent="page" to="/menue">Our Menue  |</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link active" aria-curent="page" to="/reservation" >Reservations  |</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link active " aria-curent="page" to="/contact">Contact  |</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
export default {

}
</script>

<style scoped>
.centerNav {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: auto;
  margin-left: auto;
}
.nav-item .nav-link.active {
    font-size: 18px;
    gap: 20px;
    font-family: 'Alegreya", serif';
}
</style>