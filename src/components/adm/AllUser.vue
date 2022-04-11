<template>
  <div>
    <div class="main">
      <div class="title">Utilisateurs</div>
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
          </div>
          <div class="search">
            <input type="search" placeholder="Recherche" v-model="seach" />
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
            <tr v-for="user in searchUser" :key="user">
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
                  <button class="edit">
                    <img src="../../assets/edit.svg" alt="edit" />
                  </button>
                  <button class="delete" @click="deleteUser(user.id)">
                    <img src="../../assets/delete.svg" alt="edit" />
                  </button>
                </div>
              </td>
            </tr>
          </table>
        </div>
        <div class="table-footer">
          <div class="total">Total : {{ this.total }}</div>
          <div class="pagination">
            <ul class="paginaton-card">
              <li v-for="pages in paginate" :key="pages" @click="getAll(pages)">
                {{ pages }}
              </li>
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
  mounted() {
    this.getAllUser();
  },
  data() {
    return {
      alluser: [],
      page: null,
      paginate: [],
      seach: "",
      total: "",
      deleteMessage: "",
    };
  },
  computed: {
    searchUser() {
      return this.alluser.filter(
        (user) =>
          user.name.toLowerCase().includes(this.seach.toLowerCase()) ||
          user.email.toLowerCase().includes(this.seach.toLowerCase())
      );
    },
  },

  methods: {
    getAll(page) {
      const url = "https://les2ms-api.herokuapp.com/api/mngusers?page=" + page;
      let requestOptions = {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + this.$store.state.token,
        },
      };
      fetch(url, requestOptions)
        .then((response) => {
          return response.json();
        })
        .then((result) => {
          console.log(result);
          this.alluser = result.data;
          this.page = result.last_page;
          this.pagination();
        })
        .catch((errors) => {
          console.log(errors);
        });
    },
    getAllUser() {
      const url = "https://les2ms-api.herokuapp.com/api/mngusers";
      let requestOptions = {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + this.$store.state.token,
        },
      };
      fetch(url, requestOptions)
        .then((response) => {
          return response.json();
        })
        .then((result) => {
          console.log(result);
          this.alluser = result.data;
          this.page = result.last_page;
          this.total = result.total;
          this.pagination();
        })
        .catch((errors) => {
          console.log(errors);
        });
    },
    pagination() {
      if (this.page != null) {
        for (var i = 1; i <= this.page; i++) {
          this.paginate[i - 1] = i;
        }
        this.paginate = Object.assign({}, this.paginate);
      }
    },
    deleteUser(UserId) {
      const url = "https://les2ms-api.herokuapp.com/api/mngusers/" + UserId;
      let requestOptions = {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + this.$store.state.token,
        },
      };
      fetch(url, requestOptions)
        .then((response) => {
          return response.json();
        })
        .then((result) => {
          if (result.message) {
            this.deleteMessage = result.message;

          }
        })
        .catch((errors) => {
          console.log(errors);
        });
    },
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
  background-color: lightgray;
  display: flex;
  flex-direction: column;
  gap: 1em;
  padding: 1em 1em;
  -color: black;
}
.title {
  display: flex;
  width: 100%;
  height: 3em;
  font-size: 20px;
  font-weight: 700;
  background-color: white;
  align-items: center;
  box-shadow: 0px 0px 2px 1px lightgray;
  border-radius: 10px;
  padding: 0px 25px;
  color: gray;
}

.table-card {
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
  box-shadow: 0px 0px 2px 1px lightgray;
  border-radius: 10px;
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
  box-shadow: 0px 0px 10px 0.3px lightgray;
  border-radius: 7px;
  overflow: hidden;
}

th,
td {
  padding: 10px 15px;
}
th {
  background-color: #5b3cc4;
  color: white;
  text-transform: uppercase;
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
  box-shadow: 0px 0px 10px 0.3px lightgray;
  border-radius: 7px;
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
  min-width: 2em;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #5b3cc4;
  transition: 0.5s ease;
  cursor: pointer;
  padding: 0 5px;
  border-radius: 5px;
  height: 2em;
}
.paginaton-card li:hover {
  background-color: #5b3cc4;
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
  cursor: pointer;
}
.user-action .edit {
  background-color: #5b3cc4;
  padding: 5px 10px;
  color: white;
  cursor: pointer;
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

</style>