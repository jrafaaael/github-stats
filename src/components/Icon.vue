<template>
  <svg :class="[className, 'icon']" xmlns="http://www.w3.org/2000/svg">
    <title v-if="title">
      {{ title }}
    </title>
    <use :xlink:href="iconPath" xmlns:xlink="http://www.w3.org/1999/xlink" />
  </svg>
</template>
<script>
export default {
  name: "Icon",
  props: {
    name: {
      type: String,
      required: true,
    },
    title: String,
  },
  computed: {
    iconPath() {
      return `#${this.name}`;
    },
    className() {
      return `icon--${this.name}`;
    },
  },
};
</script>
