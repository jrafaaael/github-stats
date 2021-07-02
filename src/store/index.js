import { createStore } from "vuex";
import FetchService from "../api/FetchService";

const fs = new FetchService();

export default createStore({
  state: {
    STATE: "waiting",
    USER: null,
    USER_INFO: null,
    REPOS_LIST: null,
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
    setReposList(state, payload) {
      state.REPOS_LIST = payload;
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
    async getReposList({ commit, state }) {
      const reposList = await fs.getRepos(state.USER);
      commit("setReposList", reposList);
      commit("setState", "waiting");
    },
  },
  modules: {},
});
