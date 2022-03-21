<template>
  <div class="navbar">
    <div class="logo">2MS</div>
    <ul class="menu">
      <li class="menu-items"><a href="/">Accueil</a></li>
      <li class="menu-items">
        <a href="/about">A propos</a>
      </li>
      <li class="menu-items"><a href="/contact">Contacts</a></li>
    </ul>
    <div class="right-items">
      <a href="/login">
        <button class="login" v-if="$store.state.authenticated == false">
          Se connecter
        </button>
      </a>
      <a href="/register">
        <button class="register" v-if="$store.state.authenticated == false">
          S'inscrire
        </button>
      </a>
      <a href="/register">
        <button class="register" v-if="$store.state.authenticated == true">
          Se deconnecter
        </button>
      </a>
    </div>
    <div class="toggle" @click="toogleMenu">
      <div class="line1"></div>
      <div class="line2"></div>
      <div class="line3"></div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toogleMenu() {
      const tooglediv = document.querySelector(".toggle");
      const menuCenter = document.querySelector(".menu");
      const rightMenu = document.querySelector(".right-items");
      if (
        (menuCenter.style.display == "" ||
          menuCenter.style.display == "none") &&
        (rightMenu.style.display == "" || rightMenu.style.display == "none")
      ) {
        menuCenter.style.display = "flex";
        rightMenu.style.display = "flex";
        tooglediv.classList.toggle("toggle-end");
      } else {
        menuCenter.style.display = "none";
        rightMenu.style.display = "none";
        tooglediv.classList.remove("toggle-end");
      }
    },
    registerPage() {
      this.$router.push("register");
    },
  },
};
</script>
<style scoped>
.toggle {
  display: none;
  flex-direction: column;
  gap: 2px;
  cursor: pointer;
}
.toggle div {
  background-color: #1c2851;
  height: 4px;
  width: 20px;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 25px;
  min-height: 4em;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  box-shadow: 0px 5px 5px -5px #1c2851;
  z-index: 400;
  position: fixed;
  width: 100%;
  background-color: white;
  top: 0px;
}

.menu {
  display: flex;
  gap: 2em;
  align-items: center;
}
.menu-items {
  list-style: none;
  display: inline-block;
  letter-spacing: 1px;
}
.menu-items a:active {
  text-decoration: none;
  color: #1c2820;
  font-size: 18px;
}
.menu-items a {
  text-decoration: none;
  color: #1c2851;
  transition: font-size 1s;
}
.logo {
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 21px;
  color: #1c2851;
  cursor: pointer;
}
.right-items {
  display: flex;
  align-items: center;
  gap: 0.5em;
}
.login {
  border: 2px solid #1c2851;
  background-color: white;
  color: #1c2851;
  outline: none;
  height: 3em;
  border-radius: 24px;
  width: 10em;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  line-height: 0;
  font-weight: 700;
  cursor: pointer;
  transition: 0.5s ease;
}
.register {
  background-color: #1c2851;
  color: white;
  outline: none;
  border: none;
  height: 3em;
  line-height: 0;
  border-radius: 24px;
  width: 10em;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-weight: 700;
  cursor: pointer;
  transition: 0.5s ease;
}
.register:hover {
  border: 2px solid #1c2851;
  background-color: white;
  color: #1c2851;
}
.login:hover {
  background-color: #1c2851;
  color: white;
}
@media screen and (max-width: 768px) {
  .menu {
    position: absolute;
    top: 4em;
    right: 0;
    flex-direction: column;
    align-items: center;
    padding-right: 45px;
    height: 250px;
    background-color: white;
    text-align: right;
    padding-top: 2em;
    min-width: 100%;
    display: none;
  }
  .toggle {
    display: flex;
  }
  .right-items {
    display: none;
    position: absolute;
    top: 250px;
    width: 100%;
    height: 200px;
    box-shadow: 0px 5px 5px -5px #1c2851;
    justify-content: center;
    align-items: center;
    left: 0;
    padding-bottom: 2em;
    background-color: white;
  }
}
@media screen and (max-width: 280px) {
  .right-items {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 265px;
    width: 100%;
    box-shadow: 0px 5px 5px -5px #1c2851;
    justify-content: center;
    align-items: center;
    left: 0;
    padding-bottom: 2em;
    line-height: 0;
  }
}
.toggle-end .line1 {
  transform: rotate(-45deg) translate(-4px, 5px);
}
.toggle-end .line2 {
  opacity: 0;
}
.toggle-end .line3 {
  transform: rotate(45deg) translate(-4px, -5px);
}
</style>      