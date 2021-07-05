<template>
  <article class="state">
    <img :src="gifToLoad(STATES[state]?.gif ?? 'waiting')" alt="state" />
    <label :for="id">{{ STATES[state].text }}</label>
  </article>
</template>

<script>
import STATES from "../utils/states";

export default {
  name: "HandleState",
  props: ["state", "id"],
  setup() {
    const gifToLoad = (image) => require(`@/assets/${image}.gif`);

    return {
      gifToLoad,
      STATES,
    };
  },
};
</script>

<style scoped>
img {
  width: 100%;
  min-width: 250px;
  max-width: 500px;
  margin-bottom: 1rem;
  border-radius: 10px;
}

label {
  text-align: center;
  display: block;
  cursor: pointer;
}
</style>
