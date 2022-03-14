<template>
  <div class="register">
    <div class="register-form">
      <div>
        <h1 style="color: #1c2851">Connexion</h1>
      </div>
      <div class="email-div">
        <input type="email" placeholder="Adress Email" />
      </div>
      <div class="password-div">
        <input type="password" placeholder="Mot de passe" />
      </div>
      <button class="action">Se connecter</button>
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
export default {};
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
  box-shadow: -5px 0px 5px -5px #1c2851;
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
  border-right: 1px solid #1c2851;
  border-top: none;
  border-bottom: none;
  outline: none;
  box-shadow: 0px 5px 5px -5px #1c2851;
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
  border-right: 1px solid #1c2851;
  border-top: none;
  border-bottom: none;
  outline: none;
  box-shadow: 0px 5px 5px -5px #1c2851;
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
  border-right: 1px solid #1c2851;
  border-top: none;
  border-bottom: none;
  outline: none;
  box-shadow: 0px 5px 5px -5px #1c2851;
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
  border-right: 1px solid #1c2851;
  border-top: none;
  border-bottom: none;
  outline: none;
  box-shadow: 0px 5px 5px -5px #1c2851;
}
.action {
  border: none;
  outline: none;
  background-color: #1c2851;
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
</style>