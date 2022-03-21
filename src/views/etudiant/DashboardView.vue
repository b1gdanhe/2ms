<template>
  <div class="main">
    <SideBar />
  </div>
</template>

<script>
import SideBar from "../../components/SideBar.vue";
export default {
  name: "DashBoardView",
  components: {
    SideBar,
  },
};
</script>

<style scoped>
.main {
  margin-top: 4em;
  min-height: 100vh;
}
</style>