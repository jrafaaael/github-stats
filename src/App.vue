<template>
  <main>
    <navbar />
    <section>
      <div>
        General info here (avatar, username, number of repo)
      </div>
      <div>
        Repos list here
      </div>
      <div>
        Chart of languages used for a specific repo here
      </div>
    </section>
  </main>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",
  components: { Navbar },
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

section {
  max-width: 800px;
  margin: auto;
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 300px), 1fr));
  gap: 1.5rem;
}

section div {
  width: 100%;
  height: 300px;
  background-color: #fff;
  color: var(--primary-color);
}

section div:nth-child(1) {
  grid-column: 1/-1;
  height: 75px;
}
</style>
