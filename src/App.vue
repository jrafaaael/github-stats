<template>
  <main>
    <nav>
      <!-- input here -->
    </nav>
    <section>
      <!-- grid 2x2 here -->
      <!-- row 1, column 1 and 2: general info (avatar, username, repos quantity) -->
      <!-- row 2, column 1: repos -->
      <!-- row 2, column 2: After clicking on a repository, generate a chart with highcharts of the languages ​​used in that repo -->
    </section>
  </main>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  /* TODO: Find better fonts */
  color: var(--primary-font-color);
  font-family: sans-serif;
  letter-spacing: 0.1rem;
}

:root {
  --primary-color: #011638;
  --secondary-color: #364156;

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
