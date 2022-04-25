<template>
  <div>
    <div class="home">
      <div class="action">
        <h1>Bienvenue a 2MS</h1>
        <a href="/register"> <button>S'inscrire a 2MS learning</button></a>
      </div>
      <div class="image"></div>
    </div>
    <h2 style="text-align: center">NOS COURS</h2>
    <div class="banniere">
      <div class="card1">
        <div class="part1">
          <span style="color: rgba(255, 255, 255, 0.466); font-size: 12px"
            >cours</span
          >
          <div style="margin-bottom: 2.5em; margin-top: 1em; color: white">
            Cour varia fondamental1
          </div>
          <div style="color: rgba(255, 255, 255, 0.466); font-size: 12px">
            Voir tous les modules
          </div>
        </div>
        <div class="part2">
          <div class="top-info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
            iste.
          </div>
          <div class="bottom-info">
            <button>S'inscrire</button>
          </div>
        </div>
      </div>
      <div class="card2">
        <div class="part1">
          <span style="color: rgba(255, 255, 255, 0.466); font-size: 12px"
            >cours</span
          >
          <div style="margin-bottom: 2.5em; margin-top: 1em; color: white">
            Cour varia fondamental1
          </div>
          <div style="color: rgba(255, 255, 255, 0.466); font-size: 12px">
            Voir tous les modules
          </div>
        </div>
        <div class="part2">
          <div class="top-info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
            iste.
          </div>
          <div class="bottom-info">
            <button>S'inscrire</button>
          </div>
        </div>
      </div>

      <div class="card3">
        <div class="part1">
          <span style="color: rgba(255, 255, 255, 0.466); font-size: 12px"
            >cours</span
          >
          <div style="margin-bottom: 2.5em; margin-top: 1em; color: white">
            Cour varia fondamental1
          </div>
          <div style="color: rgba(255, 255, 255, 0.466); font-size: 12px">
            Voir tous les modules
          </div>
        </div>
        <div class="part2">
          <div class="top-info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
            iste.
          </div>
          <div class="bottom-info">
            <button>S'inscrire</button>
          </div>
        </div>
      </div>
      <div class="card4">
        <div class="part1">
          <span style="color: rgba(255, 255, 255, 0.466); font-size: 12px"
            >cours</span
          >
          <div style="margin-bottom: 2.5em; margin-top: 1em; color: white">
            Cour varia fondamental1
          </div>
          <div style="color: rgba(255, 255, 255, 0.466); font-size: 12px">
            Voir tous les modules
          </div>
        </div>
        <div class="part2">
          <div class="top-info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
            iste.
          </div>
          <div class="bottom-info">
            <button>S'inscrire</button>
          </div>
        </div>
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
  min-height: 30em;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5em;
  flex-wrap: wrap;
  padding: 2em 0;
}

.card1 {
  width: 45%;
  height: 11em;
  display: flex;
  border-radius: 10px;
  transition: 0.5s ease-in-out;
  box-shadow: 0 0px 1px 1px rgb(192, 192, 192);
}
.card1:hover {
  transform: scale(1.1);
  box-shadow: 0 0px 20px 1px rgb(192, 192, 192);
}
.part1 {
  width: 35%;
  height: 100%;
  background-color: #261950;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  padding: 1.5em;
}
.part2 {
  width: 65%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: white;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 1.5em;
}
.top-info {
  width: 100%;
  height: 50%;
  color: #261950;
}
.bottom-info {
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: row-reverse;
  align-items: flex-end;
  justify-content: space-between;
  justify-self: start;
}
.bottom-info button {
  border: none;
  outline: none;
  background-color: #261950;
  height: 2em;
  width: 9em;
  color: white;
  border-radius: 25px;
  cursor: pointer;
}

.card2 {
  width: 45%;
  height: 11em;
  display: flex;
  border-radius: 10px;
  transition: 0.5s ease-in-out;
  box-shadow: 0 0px 1px 1px rgb(192, 192, 192);
}
.card2:hover {
  transform: scale(1.1);
  box-shadow: 0 0px 20px 1px rgb(192, 192, 192);
}
.card2 .part1 {
  width: 35%;
  height: 100%;
  background-color: orange;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  padding: 1.5em;
}
.card2 .part2 {
  width: 65%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: white;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 1.5em;
}
.card2 .bottom-info button {
  border: none;
  outline: none;
  background-color: orange;
  height: 2em;
  width: 9em;
  color: white;
  border-radius: 25px;
  cursor: pointer;
}

.card2 .top-info {
  width: 100%;
  height: 50%;
  color: orange;
}

.card3 {
  width: 45%;
  height: 11em;
  display: flex;
  border-radius: 10px;
  transition: 0.5s ease-in-out;
  box-shadow: 0 0px 1px 1px rgb(192, 192, 192);
}
.card3:hover {
  transform: scale(1.1);
  box-shadow: 0 0px 20px 1px rgb(192, 192, 192);
}
.card3 .part1 {
  width: 35%;
  height: 100%;
  background-color: seagreen;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  padding: 1.5em;
}
.card3 .part2 {
  width: 65%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: white;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 1.5em;
}
.card3 .bottom-info button {
  border: none;
  outline: none;
  background-color: seagreen;
  height: 2em;
  width: 9em;
  color: white;
  border-radius: 25px;
  cursor: pointer;
}

.card3 .top-info {
  width: 100%;
  height: 50%;
  color: seagreen;
}
.card4 {
  width: 45%;
  height: 11em;
  display: flex;
  border-radius: 10px;
  transition: 0.5s ease-in-out;
  box-shadow: 0 0px 1px 1px rgb(192, 192, 192);
}
.card4:hover {
  transform: scale(1.1);
  box-shadow: 0 0px 20px 1px rgb(192, 192, 192);
}
.card4 .part1 {
  width: 35%;
  height: 100%;
  background-color: sienna;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  padding: 1.5em;
}
.card4 .part2 {
  width: 65%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: white;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 2em;
}
.card4 .bottom-info button {
  border: none;
  outline: none;
  background-color: sienna;
  height: 2em;
  width: 9em;
  color: white;
  border-radius: 25px;
  cursor: pointer;
}

.card4 .top-info {
  width: 100%;
  height: 50%;
  color: sienna;
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
  margin-top: 4em;
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
  cursor: pointer;
}
.home button:hover {
  background-color: rgb(220, 219, 219);
}
@media screen and (max-width: 961px) {
  .image {
    width: 70%;
  }
  .card1,
  .card2,
  .card3,
  .card4 {
    width: 90%;
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
