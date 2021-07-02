<template>
  <div class="input-container">
    <input
      :value="user"
      type="text"
      placeholder="Search a user..."
      ref="input"
      @input="$emit('update:user', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: "IText",
  props: ["user"],
  emits: ["update:user"],
  methods: {
    fireCustomValidity(text) {
      this.$refs.input.setCustomValidity(text);
      this.$refs.input.reportValidity();
    },
    resetCustomValidity() {
      this.$refs.input.setCustomValidity("");
    },
  },
};
</script>

<style scoped>
input {
  border-style: none;
  background: transparent;
  outline: none;
}

.input-container {
  width: 75%;
  max-width: 300px;
  margin: 0 auto;
  padding: 0.75rem 1.25rem;
  background: var(--secondary-color);
  border-radius: 2px;
  position: relative;
}

.input-container:after {
  content: "";
  height: 2px;
  background-position: 0% 0%;
  background: linear-gradient(
    to right,
    #b294ff,
    #57e6e6,
    #feffb8,
    #57e6e6,
    #b294ff,
    #57e6e6
  );
  background-size: 500% auto;
  border-radius: 2px;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  animation: gradient 3s linear infinite;
}

.input-container input {
  width: 100%;
  color: var(--quaternary-color);
  font-size: 1.2rem;
}

.input-container input::-webkit-input-placeholder {
  color: #7881a1;
}

@keyframes gradient {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 100% 0;
  }
}
</style>
