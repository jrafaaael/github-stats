<template>
  <nav>
    <i-text v-model:user="user" ref="input" id="username" />
  </nav>
</template>

<script>
import IText from "./IText.vue";

import _ from "lodash";

import { ref } from "@vue/reactivity";
import { watch } from "@vue/runtime-core";
import { useStore } from "vuex";

export default {
  name: "Navbar",
  components: { IText },
  setup() {
    const user = ref("");
    const store = useStore();
    const input = ref(null);

    const getUserInfo = async () => {
      if (!user.value.match("^[A-Za-z0-9]+$")) {
        input.value.fireCustomValidity("Search a valid Github user");
        store.dispatch("changeState", "waiting");
        return;
      }
      store.dispatch("changeState", "fetching");
      await store.dispatch("getUserInfo");
    };

    const debounceGetAnswer = _.debounce(getUserInfo, 1000);

    watch(user, (currentUser) => {
      store.dispatch("changeUser", currentUser);
      store.dispatch("changeState", "typing");
      input.value.resetCustomValidity();
      debounceGetAnswer();
    });

    return {
      user,
      input,
    };
  },
};
</script>

<style scoped>
nav {
  height: 15vh;
  max-height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
