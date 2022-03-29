<template>
  <div class="main">
    <SideBar />
    <div>
      <Profile />
    </div>
  </div>
</template>

<script>
import SideBar from "../../components/SideBar.vue";
import Profile from "../../components/Profile.vue";
export default {
  name: "DashBoardView",
  components: {
    SideBar,
    Profile,
  },
};
</script>

<style scoped>
.main {
  margin-top: 4em;
  min-height: 100vh;
  display: flex;
}
</style>