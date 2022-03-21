import { createStore } from "vuex";
export default createStore({
  state: {
    authenticated: false,
    token: null,
    user: null,
  },
  getters: {},
  mutations: {
    getUserInfos(state, info) {
      if (info.token) {
        localStorage.setItem("INFO", JSON.stringify(info));
        state.authenticated = true;
        state.token = info.token;
        state.user = info.user;
      }
    },
    persistStore(state) {
      if (localStorage.getItem("INFO")) {
        let info = JSON.parse(localStorage.getItem("INFO"));
        state.authenticated = true;
        state.token = info.token;
        state.user = info.user;
      }
    },
  },
  actions: {},
  modules: {},
});
