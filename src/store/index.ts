import { createStore } from "vuex";

export default createStore({
  state: {
    //@ts-ignore
    userState: localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : ''
  },
  getters: {},
  mutations: {
    requireState(state, payload) {
      state.userState = payload;
    },
  },
  actions: {},
  modules: {},
});
