<template>
  <div>
    <div class="home">

         <Navbar :home="false" v-if="!loading"  /> 
      <spinner v-if="loading" />
      <div class="something" v-else>
        <div class="background-video">
          <video
            autoplay
            loop
            muted
            src="https://i.imgur.com/FhXCT0j.mp4"
            type="video/mp4"
          ></video>
        </div>
        <div class="content vh-100">
          <h1>Le Petit Italia</h1>
          <p>
            Bon Appe’tite! A <br />
            French <br />
            experience awaits you.
          </p>
          <button class="button"><router-link to="/menue">See More</router-link></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import spinner from "@/components/Spinner.vue";
export default {
  name: "home",
  components: {
    Navbar,
    spinner,
  },
  data() {
    return {
      loading: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 3000);
  },
};
</script>
<style scoped>
.home {
  background-color: black;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
}

.something {
  display: flex;
  max-width: 1220px;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  justify-content: center;
  align-content: center;
}
.background-video {
  width: 100%;
}
.background-video video {
  width: 100%;
  height: 100vh;
}
.content {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;
  margin-top: 10%;
  margin-bottom: auto;
}

h1 {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 50%;
  margin-left: 200px;
  margin-top: 8%;
  font-weight: 300;
  font-size: 50px;
  font-family: "Fraunces", serif;
  color: white;
}
p {
  margin-left: 200px;
  width: 50%;
  margin-top: 7%;
  font-weight: 100;
  font-size: 30px;
  font-family: "Fraunces", serif;
  color: white;
}
.button {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin-left: 199px;
  border: 2px white solid;
  width: 30%;
  margin-top: 15%;
  background-color: black;
}
a {
  text-decoration: none;
  font-weight: 100;
  font-size: 25px;
  color: white;
  font-family: "Fraunces", serif;
}

@media  (max-width: 1060px) {
  .home {
    padding-top: 10px;
    background-color: black;
    height: 100%;
    display: flex;
    align-items: center;
    overflow-x: hidden;
  }

  .background-video video {
    /* height:250px ; */
    width: 400px;
  }

  .content{
      margin-top: 0%;
  }
  .something {
    display: flex;
    max-width: 1220px;
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    justify-content: center;
    align-content: center;
    flex-direction: column;
  }

  h1 {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin-left: 0;
    margin-top: 8%;
    font-weight: 200;
    font-size: 30px;
    width: 100%;
    font-family: "Fraunces", serif;
    color: white;
  }
  p {
    margin-top: 3%;
    margin-left: 0;
    width: 100%;
    font-weight: 100;
    font-size: 30px;
    font-family: "Fraunces", serif;
    color: white;
  }

  .button {
    display: flex;
    margin-left: 0;
    width: 60%;
    align-items: flex-start;
    justify-content: center;
    border: 2px white solid;
    margin-top: 10%;
    background-color: black;
    margin-bottom: 14px;
  }
}
</style>
