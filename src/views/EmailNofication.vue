<template>
  <div class="main">
    <div class="notification-card">
      <div class="coll">1</div>
      <h1>ENCORE UNE ETAPE</h1>
      <p>
        Vous devez confirmer votre adress mail. Veillez consulter votre boite
        mail
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.main {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.notification-card {
  width: 50%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: rgb(23, 201, 100);
  gap: 2em;
  border-radius: 15px;
  box-shadow: 0px 0px 5px 1px gray;
  padding: 0 1em;
}
.notification-card h1,
p {
  z-index: 99;
}
.coll {
  position: absolute;
  height: 2em;
  width: 2em;
  background-color: black;
  transform: rotate(50deg);
  top: 0;
  left: 0;
  overflow: hidden;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
}
@media screen and (max-width: 780px) {
  .notification-card {
    width: 90%;
  }
}
</style>