<template>
  <div class="main">
    <div class="sidebar">
      <div class="close" @click="hiddenSidebar">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          class="bi bi-x-lg"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"
          />
          <path
            fill-rule="evenodd"
            d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"
          />
        </svg>
      </div>
      <div class="logo"><span>2</span>MS</div>
      <ul class="menu">
        <li class="item">
          <a href="/"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-house"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
              />
              <path
                fill-rule="evenodd"
                d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
              /></svg
            ><span>Home</span></a
          >
        </li>
        <li class="item">
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-file-person"
              viewBox="0 0 16 16"
            >
              <path
                d="M12 1a1 1 0 0 1 1 1v10.755S12 11 8 11s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"
              />
              <path d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
            </svg>
            <span>Profile</span></a
          >
        </li>
        <li class="item">
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-book-fill"
              viewBox="0 0 16 16"
              id="toogle"
            >
              <path
                d="M8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"
              />
            </svg>
            <span>Course</span>
          </a>
        </li>
        <li class="item">
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-question-circle"
              viewBox="0 0 16 16"
            >
              <path
                d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
              />
              <path
                d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"
              />
            </svg>
            <span>Quiz</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="content">
      <div class="toogle" @click="showSidebar">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          class="bi bi-list"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          />
        </svg>
      </div>
      <Profile />
    </div>
  </div>
</template>

<script>
import SideBar from "../../components/SideBar.vue";
import Profile from "../../components/Profile.vue";
export default {
  name: "DashBoardView",
  components: {
    SideBar,
    Profile,
  },
  methods: {
    showSidebar() {
      const sidebar = document.querySelector(".sidebar");
      const toogle = document.querySelector(".toogle");
      const close = document.querySelector(".close");
      if (sidebar.style.width == "0px" || sidebar.style.width == "") {
        sidebar.style.paddingLeft = "15px";
        sidebar.style.width = "20em";
        sidebar.style.transition = "0.5s";
        close.style.display = "block";
        toogle.style.display = "none";
      }
    },
    hiddenSidebar() {
      const sidebar = document.querySelector(".sidebar");
      const toogle = document.querySelector(".toogle");
      const close = document.querySelector(".close");
      if (toogle.style.display == "none" || sidebar.style.display == "") {
        sidebar.style.width = "0";
        sidebar.style.paddingLeft = "";
        sidebar.style.transition = "0.5s";
        toogle.style.display = "block";
        close.style.display = "none";
        console.log(sidebar.style.width);
      }
    },
  },
};
</script>

<style scoped>
.close {
  position: absolute;
  right: 15px;
  top: 15px;
  color: white;
  display: none;
  cursor: pointer;
}
.close:hover {
  box-shadow: 0px 0px 5px 0.1px white;
}
.toogle {
  position: absolute;
  top: 15px;
  left: 15px;
  cursor: pointer;
  transition: 0.5s;
}
.toogle:hover {
  box-shadow: 0px 0px 5px 0.1px #5b3cc4;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.main {
  min-height: 100vh;
  margin-top: 4em;
  width: 100%;
  display: flex;
}
.sidebar {
  background: #5b3cc4;
  width: 0;
  padding-top: 5em;
  padding-left: 2em;
  display: flex;
  flex-direction: column;
  gap: 2em;
  position: relative;
}
.content {
  width: 100%;
  flex-grow: 1;
  position: relative;
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 15px;
}
.logo {
  height: 3em;
  display: flex;
  align-items: center;
  font-weight: 700;
  color: white;
}
.menu {
  display: flex;
  flex-direction: column;
}
.menu li {
  list-style: none;
}
.menu li a {
  text-decoration: none;
  height: 3em;
  display: flex;
  align-items: center;
  color: white;
  transition: 0.3s ease-in-out;
}
.menu li a:hover {
  background-color: white;
  color: #5b3cc4;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  padding: 15px;
}
.menu li a svg {
  margin-right: 20px;
}
@media screen and (max-width: 780px) {
  .menu{
    gap: 20px;
  }
  .menu li a {
    flex-direction: column;
  }
  .menu li a svg {
    margin-right: 0;
  }
  .sidebar {
  width: 0;
  padding-left: 0
  
}
  
}
</style>  