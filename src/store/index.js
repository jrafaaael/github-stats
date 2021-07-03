import { createStore } from "vuex";
import FetchService from "../api/FetchService";

const fs = new FetchService();

export default createStore({
  state: {
    STATE: "waiting",
    USER: null,
    USER_INFO: null,
    REPOS: null,
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

        commit("setUserInfo", userInfo);
        commit("setRepos", repos);
        commit("setState", "waiting");
      } catch (error) {
        // TODO: Make error handling
        console.log(error);
      }
    },
  },
  modules: {},
});
