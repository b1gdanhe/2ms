<template>
  <div>
    <div class="loader-container">
      <div class="loader"></div>
    </div>
    <div class="main">
      <div class="title">Utilisateurs</div>
      <div class="description">Tous les utilisateurs</div>
      <div class="table-card">
        <div class="tools">
          <div class="filter">
            filtres
            <select name="" id="" selected="value1">
              <option value="value1">Pays</option>
              <option value="value1">value</option>
              <option value="value1">value</option>
              <option value="value1">value</option>
            </select>
            <select name="" id="" selected="value1">
              <option value="value1">Eglise</option>
              <option value="value1">value</option>
              <option value="value1">value</option>
              <option value="value1">value</option>
            </select>
            <select name="" id="" selected="value1">
              <option value="value1">Role</option>
              <option value="value1">value</option>
              <option value="value1">value</option>
              <option value="value1">value</option>
            </select>
          </div>
          <div class="search">
            <input type="search" placeholder="Recherche" />
          </div>
        </div>
        <div class="table-container">
          <table>
            <tr>
              <th>Id</th>
              <th>name</th>
              <th>email</th>
              <th>Eglise</th>
              <th>Pays</th>
              <th>telephone</th>
              <th>Date de naissance</th>
              <th>Role</th>
              <th>ACTION</th>
            </tr>
            <tr v-for="user in alluser" :key="user">
              <td>{{ user.id }}</td>
              <td>{{ user.name }}</td>
              <td>{{ user.email }}</td>
              <td>{{ user.eglise }}</td>
              <td>{{ user.country }}</td>
              <td>{{ user.phone_number }}</td>
              <td>{{ user.dates }}</td>
              <td>{{ user.role.role }}</td>
              <td>
                <div class="user-action">
                  <button class="edit">Edit</button>
                  <button class="delete">Delete</button>
                </div>
              </td>
            </tr>
          </table>
        </div>
        <div class="table-footer">
          <div class="total">total: 15882</div>
          <div class="pagination">
            <ul class="paginaton-card">
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>suivant</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  beforeMount() {
    setTimeout(() => {
      const loader = document.querySelector(".loader-container");
      loader.style.display = "none";
    }, 3000);
    fetch("https://les2ms-api.herokuapp.com/api/mngusers", {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + this.$store.state.token,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        console.log(result);
        this.alluser = result;
      });
  },
  data() {
    return {
      alluser: null,
    };
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}
.main {
  width: 100%;
  min-height: 100vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 1em;
  padding: 1em 1em;
  -color: black;
}
.title {
  display: flex;
  width: 100%;
  height: 2em;
  font-size: 20px;
  font-weight: 700;
  background-color: white;
  align-items: center;
  box-shadow: 0px 0px 2px 1px lightgray;
  border-radius: 15px 15px 0 0;
  padding: 0px 25px;
  color: gray;
}
.description {
  display: flex;
  width: 100%;
  height: 5em;
  font-size: 12px;
  font-weight: 500;
  background-color: white;
  align-items: center;
  box-shadow: 0px 0px 2px 1px lightgray;
  padding: 0px 25px;
  color: gray;
}
.table-card {
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
  box-shadow: 0px 0px 2px 1px lightgray;
  border-radius: 0 0 15px 15px;
  padding: 15px 25px;
  gap: 16px;
  color: gray;
  background-color: white;
}
.tools {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.search input {
  border: none;
  background: lightgray;
  height: 2em;
  border-radius: 15px;
  padding: 0px 15px;
  outline: none;
  cursor: pointer;
}
.filter {
  display: flex;
  gap: 1em;
  align-items: center;
}
.filter select {
  border: none;
  background: lightgray;
  height: 2em;
  border-radius: 15px;
  padding: 0px 15px;
  outline: none;
  cursor: pointer;
  width: 10em;
}
.table-container {
  width: 100%;
  justify-content: center;
  align-items: center;
}

.table-container table {
  width: 100%;
  text-align: center;
  border-collapse: collapse;
  border-spacing: 0;
  font-size: 12px;
  box-shadow: 0px 0px 1px 1px lightgray;
}
th,
td {
  padding: 10px 15px;
}
th {
  background-color: #242145;
  color: white;
  text-transform: uppercase;
}

tr {
  cursor: pointer;
}

tr:nth-child(odd) {
  background-color: lightgray;
}

.table-footer {
  width: 100%;
  height: 3em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 0px 1px 1px gray;
  padding: 0px 15px;
}

.paginaton-card {
  height: 100%;
  display: flex;
  gap: 15px;
  padding: 5px 0;
}
.paginaton-card li {
  list-style: none;
  min-width: 3em;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #242145;
  color: #242145;
  transition: 0.5s ease;
  cursor: pointer;
  padding: 0 5px;
}
.paginaton-card li:hover {
  background-color: #242145;
  color: white;
}
.user-action {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
}
.user-action .edit,
.user-action .delete {
  border: none;
  outline: none;
}
.user-action .delete {
  background-color: rgb(242, 19, 93);
  padding: 5px 10px;
  color: white;
}
.user-action .edit {
  background-color: #242145;
  padding: 5px 10px;
  color: white;
}
@media screen and (max-width: 798px) {
  .tools {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  .filter {
    flex-direction: column;
  }
}
.loader-container {
  position: fixed;
  background-color: #242145;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.loader {
  width: 10em;
  height: 10em;
  border: 15px solid white;
  border-top-color: #242145;
  border-radius: 50%;
  animation: loading 0.7s infinite;
  transition: opacity 0.7s, visibility 0.7s;
}
@keyframes loading {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>