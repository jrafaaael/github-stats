<template>
  <main>
    <navbar />
    <section v-if="STATE === 'done'">
      <user-info />
      <repos-list />
      <div>
        Chart of languages used for a specific repo here
      </div>
    </section>
    <section v-else>
      <handle-state :state="STATE" id="username" />
    </section>
  </main>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import HandleState from "./components/HandleState.vue";
import UserInfo from "./components/UserInfo.vue";

import { mapState } from "vuex";
import ReposList from "./components/ReposList.vue";

export default {
  name: "App",
  components: { Navbar, HandleState, UserInfo, ReposList },
  computed: {
    ...mapState(["STATE"]),
  },
};
</script>

<style>
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  color: var(--primary-font-color);
  /* TODO: Find better fonts */
  font-family: sans-serif;
  letter-spacing: 0.1rem;
}

:root {
  --primary-color: #011638;
  --secondary-color: #364156;

  --quaternary-color: #dff8eb;

  --primary-font-color: snow;
}

html,
body,
#app {
  width: 100%;
  height: 100%;
}

body {
  background-color: var(--primary-color);
}

img {
  display: block;
}

svg {
  width: 25px;
  height: 25px;
}

section {
  max-width: 850px;
  margin: auto;
  padding: 1rem;
  padding-bottom: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

article:not(.state) {
  width: 100%;
  padding: 0.75rem 1rem;
  background-color: var(--secondary-color);
  border-radius: 10px;
}

section > div {
  height: 300px;
  background-color: #fff;
  color: var(--primary-color);
}

@media all and (min-width: 750px) {
  section {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }

  section > * {
    flex: 0 0 calc(50% - 1rem);
  }
}
</style>
