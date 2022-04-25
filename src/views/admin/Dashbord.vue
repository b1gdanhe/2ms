<template>
  <div class="container">
    <div class="navigation">
      <ul class="nav-menu">
        <li><button>Utilisateurs</button></li>
        <li><button>Roles</button></li>
        <li><button>Cours</button></li>
        <li><button>Questions</button></li>
      </ul>
    </div>
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
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.container {
  margin-top: 5em;
  min-height: 100vh;
}
.navigation {
  width: 100%;
}
.nav-menu {
  display: flex;
  gap: 3em;
  padding: 0 1em;
  height: 4em;
}
.nav-menu li {
  list-style: none;
  width: 10em;
  height: 100%;
}
.nav-menu li button {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  transition: all 0.2s ease;
  border-bottom: 3px solid transparent;
  background-color: transparent;
  cursor: pointer;
}
.nav-menu li button:hover {
  border-bottom: 3px solid rgb(23, 201, 100);
}
.nav-menu li button:focus {
  border-bottom: 3px solid rgb(23, 201, 100);
}
</style>