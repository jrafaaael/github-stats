<template>
  <main>
    <navbar />
    <section>
      <!-- grid 2x2 here -->
      <!-- row 1, column 1 and 2: general info (avatar, username, repos quantity) -->
      <!-- row 2, column 1: repos -->
      <!-- row 2, column 2: After clicking on a repository, generate a chart with highcharts of the languages ​​used in that repo -->
    </section>

    <!--{{ REPOS_LIST }}-->
    <ul>
      <li v-for="repos in REPOS_LIST" :key="repos.id">
        {{ repos.name }}
      </li>
    </ul>
    <br />
    <br />
    <!-- This is to demonstrate the operation of the input and the different states that the project has:
    1) "waiting": waiting for a valid username
    2) "typing": state that occurs while the user types. Goes to the "fetching" state 1 second (1000 ms) after the last change in the input
    3) "fetching": state while the GET request occurs -->
    {{ STATE }}
    <br />
    <br />
    {{ USER }}
    <br />
    <br />
    {{ USER_INFO }}
  </main>
</template>

<script>
import { mapState } from "vuex";
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",
  components: { Navbar },
  computed: {
    ...mapState(["STATE", "USER", "USER_INFO", "REPOS_LIST"]),
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
</style>
