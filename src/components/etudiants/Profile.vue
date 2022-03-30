<template>
  <div class="prof">
    <div class="card">
      <div class="card-header"></div>
      <div class="card-body">
        <div class="name-card">
          <span class="lab">Nom</span>
          <span class="content" v-if="$store.state.user.name">{{
            $store.state.user.name
          }}</span>
        </div>
        <div class="email-card">
          <span class="lab">Adresse Email</span>
          <span class="content" v-if="$store.state.user.email">{{
            $store.state.user.email
          }}</span>
        </div>
        <button @click="ed = true">Modifier son profile</button>
      </div>
    </div>
  </div>
  <UpdateProfile :ed="ed" :closeEditModal="closeEditModal"  />
</template>

<script>
import UpdateProfile from "@/components/etudiants/UpdateProfile.vue";
export default {
  data() {
    return {
      ed: false,
    };
  },
  components: {
    UpdateProfile,
  },
  methods: {
    closeEditModal() {
      this.ed = !this.ed;
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.prof {
  display: flex;
  justify-content: center;
}
.card {
  width: 60%;
  min-width: 100px;
  background-color: #5b3cc4;
  height: 31em;
  display: flex;
  box-shadow: 0px 5px 5px -5px black;
  margin-top: 1em;
  flex-direction: column;
  align-items: center;
  padding: 15px 15px;
  gap: 2em;
  border-radius: 15px;
}
.card-header {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: white url("../../assets/pngegg.png") no-repeat center left 100% /
    100% 100%;
}
.card-body {
  width: 100%;
  height: 60%;
  background-color: white;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  display: flex;
  flex-direction: column;
  padding: 40px 40px;
  gap: 2em;
  width: 100%;
}
.name-card,
.email-card {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.name-card .lab,
.email-card .lab {
  color: gray;
}
.name-card .content,
.email-card .content {
  margin-left: 10px;
}
.card-body button {
  outline: none;
  background: rgb(23, 201, 100);
  border: none;
  height: 60px;
  border-radius: 25px;
  color: white;
  cursor: pointer;
}
@media screen and (max-width: 780px) {
  .card {
    width: 100%;
  }
  .card-body {
    padding: 40px 10px;
  }
  .card-body button {
    width: 100%;
  }
}
</style>