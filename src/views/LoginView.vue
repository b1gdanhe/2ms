<template>
  <div class="register">
    <div class="register-form">
      <div>
        <h1 style="color: #5b3cc4">Connexion</h1>
      </div>
      <div class="email-div">
        <input type="email" placeholder="Adress Email" v-model="email" />
        <div class="errors" v-if="errors_email !== null">
          {{ errors_email }}
        </div>
      </div>
      <div class="password-div">
        <input type="password" placeholder="Mot de passe" v-model="password" />
        <div class="errors" v-if="errors_password !== null">
          {{ errors_password }}
        </div>
      </div>
      <button class="action" @click="login">Se connecter</button>
      <span style="font-size: 12px"
        >Je n'ai pas encore de compte
        <span style="color: green; font-size: 12px; cursor: pointer"
          >S'inscrire</span
        ></span
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      errors_email: null,
      errors_password: null,
    };
  },
  methods: {
    login() {
      const url = "https://les2ms-api.herokuapp.com/api/login";

      let login_credentials = {
        email: this.email,
        password: this.password,
      };
      let requestOptions = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(login_credentials),
      };
      fetch(url, requestOptions)
        .then((response) => {
          return response.json();
        })
        .then((result) => {
          console.log(result);
          if (result.errors) {
            if (result.errors.email) {
              this.errors_email = result.errors.email[0];
            }
            if (result.errors.password) {
              this.errors_password = result.errors.password[0];
            }
          }
          if (result.errors_message) {
            alert(result.errors_message);
          }
          if (result.token) {
            console.log(result);
            this.$store.commit("getUserInfos", result);
            this.$router.push("/dashboard");
          }
        });
    },
  },
};
</script>

<style scoped>
.register {
  margin-top: 4em;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.register-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2em;
  min-width: 40%;
  padding: 25px 10px;
  box-shadow: -5px 0px 5px -5px #5b3cc4;
  border-radius: 25px;
}
.username-div {
  width: 100%;
}
.username-div input {
  width: 100%;
  min-height: 3em;
  border-radius: 25px;
  padding: 0 1.5em;
  font-size: 16px;
  border-left: none;
  border-right: 1px solid #5b3cc4;
  border-top: none;
  border-bottom: none;
  outline: none;
  box-shadow: 0px 5px 5px -5px #5b3cc4;
}
.email-div {
  width: 100%;
}
.email-div input {
  width: 100%;
  min-height: 3em;
  border-radius: 25px;
  padding: 0 1.5em;
  font-size: 16px;
  border-left: none;
  border-right: 1px solid #5b3cc4;
  border-top: none;
  border-bottom: none;
  outline: none;
  box-shadow: 0px 5px 5px -5px #5b3cc4;
}
.password-div {
  width: 100%;
}
.password-div input {
  width: 100%;
  min-height: 3em;
  border-radius: 25px;
  padding: 0 1.5em;
  font-size: 16px;
  border-left: none;
  border-right: 1px solid #5b3cc4;
  border-top: none;
  border-bottom: none;
  outline: none;
  box-shadow: 0px 5px 5px -5px #5b3cc4;
}
.password-conf-div {
  width: 100%;
}
.password-conf-div input {
  width: 100%;
  min-height: 3em;
  border-radius: 25px;
  padding: 0 1.5em;
  font-size: 16px;
  border-left: none;
  border-right: 1px solid #5b3cc4;
  border-top: none;
  border-bottom: none;
  outline: none;
  box-shadow: 0px 5px 5px -5px #5b3cc4;
}
.action {
  border: none;
  outline: none;
  background-color: #5b3cc4;
  color: white;
  width: 100%;
  min-height: 3em;
  border-radius: 25px;
  line-height: 0;
  font-size: 16px;
  cursor: pointer;
}
@media screen and (max-width: 912px) {
  .register-form {
    width: 70%;
  }
}
@media screen and (max-width: 768px) {
  .register-form {
    width: 80%;
  }
}
.errors {
  color: red;
  text-align: center;
}
</style>