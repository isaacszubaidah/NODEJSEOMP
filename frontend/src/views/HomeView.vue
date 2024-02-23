<template>
  <Navbar />
  <div class="home">
    <div class="something">
      <div class="background-video">
        <video
          autoplay
          loop
          muted
          src="https://i.imgur.com/FhXCT0j.mp4"
          type="video/mp4"
        ></video>
      </div>
      <div class="content">
        <h1>Le Petit Italia</h1>
        <p>
          Bon Appe’tite! A <br />
          French <br />
          experience awaits you.
        </p>
        <button><a href="/menue">See More</a></button>
      </div>
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
.home {
  background-color: black;
}

.something {
  display: flex;
  align-content: center;
  justify-content: space-around;
  /* justify-content: space-between; */
}
.content {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: flex-start;
  /* margin-right: auto;
  /* margin-left: 40%;  */
  width: 50%;
  font-family: "Playfair display", serif;
  color: white;
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
button {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin-left: 274px;
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

.background-video {
  /* display: flex;
  align-content: flex-start; */
  /* align-self: self-start; */
  /* height: 40%; */
  width: 50%;
  margin-top: -600px;
  overflow-y: none;
}

.background-video video {
  height: 1400px;
  width: 100%;
  top: 0;
}
</style>
