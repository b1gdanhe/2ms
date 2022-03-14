<template>
  <NavBar />
   <router-view class="bod" />
  <Footer /> 
</template>
<script>
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
export default {
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
}
bod{
  margin-top: 200em;
}
#app {
  min-height: 100vh;
}
</style>
