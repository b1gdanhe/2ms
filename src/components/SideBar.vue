<template>
  <div class="container">
    <div class="sidebar">
      <div class="logo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          class="bi bi-justify"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
          />
        </svg>
        <span class="logo_text"> <span style="color: red">2</span>MS</span>
      </div>
      <ul class="menu">
        <li class="menu-item">
          <a href="#" class="menu-link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="19"
              fill="currentColor"
              class="bi bi-speedometer"
              viewBox="0 0 16 16"
            >
              <path
                d="M8 2a.5.5 0 0 1 .5.5V4a.5.5 0 0 1-1 0V2.5A.5.5 0 0 1 8 2zM3.732 3.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 8a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 7.31A.91.91 0 1 0 8.85 8.569l3.434-4.297a.389.389 0 0 0-.029-.518z"
              />
              <path
                fill-rule="evenodd"
                d="M6.664 15.889A8 8 0 1 1 9.336.11a8 8 0 0 1-2.672 15.78zm-4.665-4.283A11.945 11.945 0 0 1 8 10c2.186 0 4.236.585 6.001 1.606a7 7 0 1 0-12.002 0z"
              />
            </svg>
            <span class="menu-test">Tableau de bord</span></a
          >
        </li>
        <li class="menu-item">
          <a href="#" class="menu-link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="19"
              fill="currentColor"
              class="bi bi-person-circle"
              viewBox="0 0 16 16"
            >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path
                fill-rule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
              />
            </svg>

            <span class="menu-test">Profile</span></a
          >
        </li>
        <li class="menu-item">
          <a href="#" class="menu-link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="19"
              fill="currentColor"
              class="bi bi-book-fill"
              viewBox="0 0 16 16"
            >
              <path
                d="M8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"
              />
            </svg>
            <span class="menu-test">Cours</span></a
          >
        </li>
        <li class="menu-item">
          <a href="#" class="menu-link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-question-circle-fill"
              viewBox="0 0 16 16"
            >
              <path
                d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z"
              />
            </svg>
            <span class="menu-test">Question</span></a
          >
        </li>
        <li class="menu-item">
          <a href="#" class="menu-link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="19"
              fill="currentColor"
              class="bi bi-gear-fill"
              viewBox="0 0 16 16"
            >
              <path
                d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"
              /></svg
            ><span class="menu-test">Paramettre</span></a
          >
        </li>
      </ul>
      <div class="logout">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="19"
          height="19"
          fill="currentColor"
          class="bi bi-box-arrow-left"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"
          />
          <path
            fill-rule="evenodd"
            d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"
          />
        </svg>
        <!-- <span class="logout-text">{{$store.state.user.name}}</span> -->
      </div>
      <div class="rediuse">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="currentColor"
          class="bi bi-arrow-left-circle-fill"
          viewBox="0 0 16 16"
          style="cursor: pointer"
          @click="rediuceBar"
        >
          <path
            d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"
          />
        </svg>
      </div>
    </div>
  </div>
  <div></div>
</template>

<script>
export default {
  methods: {
    rediuceBar() {
      const container = document.querySelector(".container");
      console.log(container);
      if (container.style.width == "" || container.style.height == "17em") {
        container.classList.toggle("container-red");
      } else {
        container.classList.remove("container-red");
        logout;
      }
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
.container {
  min-height: 100vh;
  height: 100vh;
  width: 17em;
  display: flex;
}
.sidebar {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: 100vh;
  justify-content: space-between;
  width: 17em;
  background-color: #5b3cc4;
  padding-top: 2em;
  padding-bottom: 2em;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  border: none;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}
</style>
<style scoped>
.logo {
  display: flex;
  align-items: center;
  width: 100%;
  height: 10%;
  color: white;
  gap: 1.5em;
  padding-left: 2em;
  cursor: pointer;
  transition: all 0.5s;
}
.logo_text {
  font-size: 30px;
  font-weight: bold;
}
</style>
<style scoped>
.menu {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
}
.menu-item {
  list-style: none;
  width: 100%;
  height: 15%;
  display: flex;
}
.menu-item:hover {
  background-color: white;
  color: #5b3cc4;
  box-shadow: 0px 0px 5px 1px black;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
}
.menu-item:hover .menu-link {
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  background-color: white;
  color: #5b3cc4;
}

.menu-link {
  display: flex;
  align-items: center;
  width: 100%;
  gap: 1.5em;
  padding-left: 2em;
  text-decoration: none;
  color: white;
}
.menu-test {
  font-size: 19px;
  transition: all 0.5s;
}
</style>

<style scoped>
.logout {
  display: flex;
  height: 10%;
  align-items: center;
  gap: 1.5em;
  padding-left: 2em;
  color: white;
  transition: all 0.5s;
  cursor: pointer;
}
.logout:hover {
  background-color: white;
  color: #5b3cc4;
  box-shadow: 0px 0px 5px 1px black;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
}
.logout-text {
  font-size: 19px;
  transition: all 0.5s;
}
.rediuse {
  color: white;
  display: flex;
  align-items: center;
  width: 100%;
  height: 10%;
  padding-left: 2em;
  padding-top: 2em;
  transition: all 0.5s;
}
</style>
<style scoped>
.container-red .sidebar {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: 100vh;
  justify-content: space-between;
  width: 5em;
  background-color: #5b3cc4;
  padding-top: 2em;
  padding-bottom: 2em;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  border: none;
}
.container-red .logo .logo_text {
  display: none;
}
.container-red .menu-test {
  display: none;
}
.container-red .logout-text {
  display: none;
}
.container-red .rediuse svg {
  transform: rotate(180deg);
}
</style>