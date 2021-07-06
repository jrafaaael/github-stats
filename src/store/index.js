import { createStore } from "vuex";
import FetchService from "../api/FetchService";

const fs = new FetchService();

export default createStore({
  state: {
    STATE: "waiting",
    USER: null,
    USER_INFO: null,
    REPOS: null,
    REPO: null,
    REPO_LANGS: null,
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
    setRepos(state, payload) {
      state.REPOS = payload;
    },
    setRepo(state, payload) {
      state.REPO = payload;
    },
    setRepoInfo(state, payload) {
      state.REPO_LANGS = payload;
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
      try {
        const [{ data: userInfo }, { data: repos }] = await fs.getUserAndRepos(
          state.USER
        );

        // TODO: Delete these "console.log". Here you can see the operation of the
        //simultaneous GET requests of the user information and the repositories
        console.log({ userInfo });
        console.log({ repos });

        commit("setRepo", null);
        commit("setRepoInfo", null);
        commit("setUserInfo", userInfo);
        commit("setRepos", repos);
        commit("setState", "done");
      } catch (error) {
        // TODO: Make error handling
        console.log(error);
      }
    },
    async changeRepo({ commit, state }, payload) {
      commit("setRepoInfo", "fetching");
      commit("setRepo", payload);
      const res = await fs.getLanguages(state.USER, state.REPO);
      commit("setRepoInfo", res);
    },
  },
  modules: {},
});
