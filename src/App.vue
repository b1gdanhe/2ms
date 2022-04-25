<template>
  <div class="loader-container">
    <div class="loader"></div>
  </div>
  <NavBar />
  <router-view />
  <Footer />
</template>
<script>
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
export default {
  beforeMount() {
    this.$store.commit("persistStore");
  },

  mounted() {
    setTimeout(() => {
      const loader = document.querySelector(".loader-container");
      loader.style.display = "none";
    }, 3000);
  },
  components: {
    NavBar,
    Footer,
  },
};
</script>

<style>
* {
  margin: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}

#app {
  min-height: 100vh;
}
.loader-container {
  position: fixed;
  background-color: rgba(0, 0, 0, 0.9);
  filter: blur(1px);
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.loader {
  filter: blur(0);
  width: 10em;
  height: 10em;
  border: 15px solid white;
  border-top-color: #5b3cc4;
  border-radius: 50%;
  animation: loading 0.7s infinite;
  transition: opacity 0.7s, visibility 0.7s;
}
@keyframes loading {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
