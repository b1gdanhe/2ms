<template>
  <div class="prof">
    <div class="card">
      <div class="card-header"></div>
      <div class="name-card">
        <span class="content" v-if="$store.state.user.name">{{
          $store.state.user.name
        }}</span>
      </div>

      <div class="card-body">
        <!-- =============================YYYY===================================== -->

        <div class="card-fields">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            class="bi bi-envelope-fill"
            viewBox="0 0 16 16"
          >
            <path
              d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"
            />
          </svg>
          <div class="email-card">
            <span class="lab">Adresse Email</span>
            <span class="content" v-if="$store.state.user.email">{{
              $store.state.user.email
            }}</span>
          </div>
        </div>
        <!-- =============================YYYY===================================== -->

        <div class="card-fields">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            class="bi bi-house-door-fill"
            viewBox="0 0 16 16"
          >
            <path
              d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z"
            />
          </svg>
          <div class="eglise-card">
            <span class="lab">Eglise</span>
            <span class="content" v-if="$store.state.user.eglise">{{
              $store.state.user.eglise
            }}</span>
          </div>
        </div>

        <!-- =============================YYYY===================================== -->
        <div class="card-fields">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            class="bi bi-geo-alt-fill"
            viewBox="0 0 16 16"
          >
            <path
              d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"
            />
          </svg>
          <div class="country-card">
            <span class="lab">Pays</span>
            <span class="content" v-if="$store.state.user.country">{{
              $store.state.user.country
            }}</span>
          </div>
        </div>

        <!-- =============================YYYY===================================== -->
        <div class="card-fields">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            class="bi bi-calendar-date"
            viewBox="0 0 16 16"
          >
            <path
              d="M6.445 11.688V6.354h-.633A12.6 12.6 0 0 0 4.5 7.16v.695c.375-.257.969-.62 1.258-.777h.012v4.61h.675zm1.188-1.305c.047.64.594 1.406 1.703 1.406 1.258 0 2-1.066 2-2.871 0-1.934-.781-2.668-1.953-2.668-.926 0-1.797.672-1.797 1.809 0 1.16.824 1.77 1.676 1.77.746 0 1.23-.376 1.383-.79h.027c-.004 1.316-.461 2.164-1.305 2.164-.664 0-1.008-.45-1.05-.82h-.684zm2.953-2.317c0 .696-.559 1.18-1.184 1.18-.601 0-1.144-.383-1.144-1.2 0-.823.582-1.21 1.168-1.21.633 0 1.16.398 1.16 1.23z"
            />
            <path
              d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"
            />
          </svg>
          <div class="date-card">
            <span class="lab">Date de naissance</span>
            <span class="content" v-if="$store.state.user.dates">{{
              $store.state.user.dates
            }}</span>
          </div>
        </div>

        <!-- =============================YYYY===================================== -->
        <div class="card-fields">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            class="bi bi-telephone"
            viewBox="0 0 16 16"
          >
            <path
              d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
            />
          </svg>
          <div class="phone-card">
            <span class="lab">Numero de telephone</span>
            <span class="content" v-if="$store.state.user.phone_number">{{
              $store.state.user.phone_number
            }}</span>
          </div>
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
  width: 55%;
  min-width: 100px;
  background-color: #5b3cc4;
  height: 50em;
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
  height: 80%;
  background-color: white;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  display: flex;
  flex-direction: column;
  padding: 40px 40px;
  gap: 2em;
  width: 100%;
}
.card-fields {
  display: flex;
  align-items: center;
  gap: 1em;
  padding-bottom: 5px;
  box-shadow: 0px 5px 5px -5px black;
}
.card-fields svg {
  color: gray;
}
.name-card {
  color: white;
  font-weight: 700;
}
.email-card,
.eglise-card,
.country-card,
.date-card,
.phone-card {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.email-card .lab,
.eglise-card .lab,
.country-card .lab,
.date-card .lab,
.phone-card .lab {
  color: gray;
}

.card-body button {
  outline: none;
  background: rgb(23, 201, 100);
  border: none;
  border-radius: 25px;
  color: white;
  cursor: pointer;
  height: 3em;
}
@media screen and (max-width: 780px) {
  .card {
    width: 100%;
    height: 50em;
  }

  .email-card,
  .eglise-card,
  .country-card,
  .date-card,
  .phone-card {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .card-body {
    padding: 40px 10px;
  }
  .card-body button {
    width: 100%;
  }
}
</style>