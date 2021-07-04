<template>
  <article>
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
article {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

img {
  width: 100%;
  min-width: 250px;
  max-width: 500px;
  border-radius: 10px;
}

label {
  cursor: pointer;
}
</style>
