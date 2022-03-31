<template>
  <div class="editor-alert" v-if="show == true">{{ this.message }}</div>
  <div class="editor-container" v-if="ed">
    <div class="editor-modal">
      <input type="text " placeholder="Name" v-model="name" />
      <div v-if="this.errors_name">{{ this.errors_name }}</div>
      <!-- jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj -->
      <input type="email" placeholder="Email" v-model="email" />
      <div v-if="this.errors_email">{{ this.errors_email }}</div>
      <!-- jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj -->
      <input type="date" placeholder="Date de naissance" v-model="date" />
      <div v-if="this.errors_email">{{ this.errors_email }}</div>
      <!-- jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj -->
      <input
        type="text"
        placeholder="Eglise locale frequentee"
        v-model="eglise"
      />
      <div v-if="this.errors_email">{{ this.errors_email }}</div>
      <!-- jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj -->
      <select v-model="selected" class="editor-select">
        <option value="">Pays</option>
        <option v-for="contry in contries" :key="contry.id" :value="contry.name">
          {{ contry.name }}
        </option>
        <option value="">Pays</option>
      </select>
      <div v-if="this.errors_email">{{ this.errors_email }}</div>
      <div class="editor-buttons">
        <button class="editor-go" @click="saveProfile">Enregistrer</button>
        <button class="editor-cancel" @click="closeEditModal">Retourner</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["ed", "closeEditModal"],
  data() {
    return {
      show: false,
      name: this.$store.state.user.name,
      email: this.$store.state.user.email,
      errors_name: null,
      errors_email: null,
      message: null,
      contries: this.$store.state.contries,
      selected: "",
      date: null,
      eglise: null,
    };
  },
  methods: {
    saveProfile() {
      let user_info = {
        name: this.name,
        email: this.email,
        country: this.selected,
        date: this.date,
        eglise: this.eglise,
      };
      console.log(user_info);
      const url =
        "https://les2ms-api.herokuapp.com/api/userupdate/" +
        this.$store.state.user.id;
      let requestOptions = {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + this.$store.state.token,
        },
        body: JSON.stringify(user_info),
      };
      fetch(url, requestOptions)
        .then((response) => {
          return response.json();
        })
        .then((result) => {
          console.log(result);
          if (result.errors) {
            if (result.errors.name) {
              this.errors_name = result.errors.name[0];
            }
            if (result.errors.email) {
              this.errors_email = result.errors.email[0];
            }
          }
          if (result.token) {
            this.message = result.message;
            this.show = !this.show;
            this.$store.commit("getUserInfos", result);
            setTimeout(() => {
              location.reload();
            }, 2000);
          }
        });
    },
  },
};
</script>

<style scoped>
.editor-alert {
  position: absolute;
  top: 5.5em;
  right: 1em;
  width: 17em;
  height: 6em;
  display: flex;
  background-color: rgb(23, 201, 100);
  box-shadow: 0px 5px 5px -5px black;
  border-radius: 15px;
  padding: 1em;
  align-items: center;
  gap: 1em;
  font-weight: bold;
  color: white;
  transform: rotate(8deg);
  transition: 0.5 ease-in-out;
  z-index: 99;
}
.editor-container {
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
}
.editor-modal {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 40%;
  gap: 16px;
  background-color: #5b3cc4;
  padding: 5px 15px;
  height: 18em;
  border-radius: 15px;
}
.editor-modal input {
  height: 3em;
  border: none;
  outline: none;
  border-radius: 15px;
  padding: 0px 15px;
  cursor: pointer;
}
.editor-modal .editor-buttons {
  display: flex;
  justify-content: space-around;
}
.editor-modal .editor-buttons button {
  width: 7em;
  line-height: 0;
  height: 2.5em;
  border-radius: 15px;
  border: none;
  outline: none;
  color: white;
  font-weight: 700;
  cursor: pointer;
}
.editor-select {
  height: 3em;
  border: none;
  outline: none;
  border-radius: 15px;
  padding: 0px 15px;
  cursor: pointer;
  background-color: white;

  /*  */
  appearance: none;
  -webkit-appearance: none;
}
.editor-select:focus {
  background-color: lightgray;
  color: black;
}
.editor-select option {
  outline: none;
  border: none;
  width: 50em;
  display: block;
  color: black;
}

.editor-go {
  background: rgb(23, 201, 100);
}
.editor-cancel {
  background: rgb(242, 19, 93);
}
@media screen and (max-width: 780px) {
  .editor-modal {
    width: 80%;
  }
}
</style>
