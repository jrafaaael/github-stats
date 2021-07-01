import { createStore } from "vuex";
import FetchService from "../api/FetchService";

const fs = new FetchService();

export default createStore({
  state: {
    STATE: "waiting",
    USER: null,
    USER_INFO: null,
  },
  mutations: {
    setState(state, payload) {
      state.STATE = payload;
    },
    setUser(state, payload) {
      state.USER = payload;
    },
    setUserInfo(state, payload) {
      state.USER_INFO = payload;
    },
  },
  actions: {
    changeState({ commit }, payload) {
      commit("setState", payload);
    },
    changeUser({ commit }, payload) {
      commit("setUser", payload);
    },
    async getUserInfo({ commit, state }) {
      const userInfo = await fs.getUser(state.USER);
      commit("setUserInfo", userInfo);
      commit("setState", "waiting");
    },
  },
  modules: {},
});
