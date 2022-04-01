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
        <div class="eglise-card">
          <span class="lab">Eglise</span>
          <span class="content" v-if="$store.state.user.eglise">{{
            $store.state.user.eglise
          }}</span>
        </div>
        <div class="country-card">
          <span class="lab">Pays</span>
          <span class="content" v-if="$store.state.user.country">{{
            $store.state.user.country
          }}</span>
        </div>
        <div class="date-card">
          <span class="lab">Date de naissance</span>
          <span class="content" v-if="$store.state.user.dates">{{
            $store.state.user.dates
          }}</span>
        </div>
        <div class="phone-card">
          <span class="lab">Numero de telephone</span>
          <span class="content" v-if="$store.state.user.phone_number">{{
            $store.state.user.phone_number
          }}</span>
        </div>
        <button @click="ed = true">Modifier son profile</button>
      </div>
    </div>
  </div>
  <UpdateProfile :ed="ed" :closeEditModal="closeEditModal" />
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
  height: 47em;
  display: flex;
  box-shadow: 0px 5px 5px -5px black;
  margin: 1em 0;
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
  height: 75%;
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
.email-card,
.eglise-card,
.country-card,
.date-card,
.phone-card {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.name-card .lab,
.email-card .lab,
.eglise-card .lab,
.country-card .lab,
.date-card .lab,
.phone-card .lab {
  color: gray;
}

.name-card .content,
.email-card .content,
.eglise-card .content,
.country-card .content,
.date-card .content,
.phone-card .card {
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
    height: 49em;
  }
  .card-body {
    padding: 40px 10px;
  }
  .card-body button {
    width: 100%;
  }
}
</style>