<template>
  <div class="container">
    <AllUser />
  </div>
</template>

<script>
import AllUser from "@/components/adm/AllUser.vue";
export default {
  components: {
    AllUser,
  },
};
</script>

<style scoped>
.container {
  margin-top: 4em;
  min-height: 100vh;
}
</style>