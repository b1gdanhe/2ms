<template>
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
</style>
