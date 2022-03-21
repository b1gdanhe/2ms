<template>
  <div class="main">
    <div class="contact_form">
      <h1>Nous Conacter</h1>
      <div class="email">
        <input type="text" v-model="email" placeholder="Adresse Email" />
      </div>
      <div class="subject">
        <input type="text" v-model="subject" placeholder="Subject" />
      </div>
      <div class="message">
        <textarea name="" id="" cols="30" rows="10" class="message-text">
 Votre Message</textarea
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.main {
  padding-top: 5em;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.contact_form {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40em;
  height: 25em;
  gap: 1em;
}
.contact_form h1 {
  color: #42b983;
}
.contact_form div {
  width: 90%;
}
.contact_form div input {
  width: 100%;
  border: none;
  outline: none;
  height: 5em;
  box-shadow: 0px 0px 15px 1px lightgray;
  padding: 1em 1em;
  font-size: 15px;
  min-width: 270px;
}
.contact_form div textarea {
  width: 100%;
  border: none;
  outline: none;
  height: 10em;
  box-shadow: 0px 0px 15px 1px lightgray;
  padding: 1em 1em;
  font-size: 15px;
  resize: none;
  min-width: 270px;
}
@media screen and (max-width: 280px) {
  .contact_form div {
    width: 270px;
  }
  @media screen and (max-width: 412px) {
    .contact_form div {
      width: 300px;
    }
  }
}
</style>