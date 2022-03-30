<template>
  <div>
    <div class="home">
      <div class="action">
        <h1>Bienvenue a 2MS</h1>
        <a href="/register"> <button>S'inscrire a 2MS learning</button></a>
      </div>
      <div class="image"></div>
    </div>
    <div class="banniere">
      <div class="card1">
        <div>Cours 1</div>
      </div>
      <div class="card2">
        <div>Cours 2</div>
      </div>
      <div class="card3">
        <div>Cours 3</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
};
</script>

<style scoped>
.banniere {
  background-color: white;
  min-height: 400px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.banniere div {
  width: 300px;
  height: 300px;
  border-radius: 25px;
}
.card1 {
  background-color: seagreen;
  display: flex;
  flex-direction: column;
  padding-top: 25px;
}
.card1 div {
  width: 100%;
  height: 30%;
  background-color: lightgray;
  border-radius: 0 0 0 0;
  box-shadow: 0px 5px 5px -5px;
  font-size: 20px;
  font-weight: bold;
  font-family: "Helvetica";
  display: flex;
  justify-content: center;
  align-items: center;
}
.card2 {
  background-color: slategrey;
  display: flex;
  flex-direction: column;
  padding-top: 25px;
}
.card2 div {
  width: 100%;
  height: 30%;
  background-color: lightgray;
  border-radius: 0 0 0 0;
  box-shadow: 0px 5px 5px -5px;
  font-size: 20px;
  font-weight: bold;
  font-family: "Helvetica";
  display: flex;
  justify-content: center;
  align-items: center;
}
.card3 {
  background-color: goldenrod;
  display: flex;
  flex-direction: column;
  padding-top: 25px;
}
.card3 div {
  width: 100%;
  height: 30%;
  background-color: lightgray;
  border-radius: 0 0 0 0;
  box-shadow: 0px 5px 5px -5px;
  font-size: 20px;
  font-weight: bold;
  font-family: "Helvetica";
  display: flex;
  justify-content: center;
  align-items: center;
}
.home {
  width: 100%;
  height: 300px;
  color: white;
  padding: 0px 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 100vh;
  background: #5b3cc4;
  margin-top: 4em
}
.action {
  display: flex;
  flex-direction: column;
  gap: 5em;
  width: 50%;
  justify-content: center;
  align-items: center;
}

.image {
  background: #5b3cc4 url("../assets/ban1.png") no-repeat center;
  background-size: 70% 70%;
  width: 50%;
  height: 100%;
}
.home button {
  min-height: 3em;
  min-width: 100%;
  background-color: white;
  border: none;
  outline: none;
  font-size: 20px;
  font-weight: bold;
  border-radius: 35px;
  color: #5b3cc4;
}
.home button:hover {
  background-color: rgb(220, 219, 219);
}
@media screen and (max-width: 961px) {
  .image {
    width: 70%;
  }
}
@media screen and (max-width: 768px) {
  .home {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 2em;
  }
  .action {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
    align-items: center;
    gap: 5em;
    text-align: center;
  }
  .image {
    background: #5b3cc4 url("../assets/ban1.png") no-repeat center;
    background-size: 70% 70%;
    width: 100%;
    height: 100%;
  }
  .banniere {
    flex-direction: column;
    padding: 0px 25px;
    gap: 2em;
    padding: 25px 0;
  }
}
@media screen and (max-width: 485px) {
  .home {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 2em;
  }
  .action {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 5em;
  }
}
</style>
