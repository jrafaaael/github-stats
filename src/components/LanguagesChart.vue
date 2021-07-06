<template>
  <article>
    <vue-highcharts
      v-if="LANGS !== 'fetching' && LANGS !== null"
      type="chart"
      :options="chartOptions"
      :redrawOnUpdate="true"
      :oneToOneUpdate="false"
      :animateOnUpdate="true"
    />
    <div v-else class="loading">
      <h3>
        Select a repo to see the languages used
      </h3>
      <img :src="gifToLoad(LANGS === 'fetching' ? 'fetch' : 'waiting')" alt="waiting">
    </div>
  </article>
</template>

<script>
import HandleState from "./HandleState.vue";

import VueHighcharts from "vue3-highcharts";

import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";

export default {
  name: "LanguagesChart",
  components: {
    VueHighcharts,
    HandleState,
  },
  setup() {
    const store = useStore();
    const REPO_LANGS = computed(() => store.state.REPO_LANGS);
    const langs = computed(() =>
      Object.entries(REPO_LANGS.value).map((entry, i) => ({
        name: entry[0],
        y: entry[1],
        sliced: i === 0,
      }))
    );
    const chartOptions = computed(() => ({
      chart: {
        type: "pie",
        backgroundColor: "transparent",
      },
      colors: [
        "#2f7ed8",
        "#0d233a",
        "#8bbc21",
        "#910000",
        "#1aadce",
        "#492970",
        "#f28f43",
        "#77a1e5",
        "#c42525",
        "#a6c96a",
      ],
      title: {
        text: `${store.state.REPO}`,
        style: {
          color: "snow",
          fontSize: "24px",
          fontWeight: 700,
        },
      },
      plotOptions: {
        pie: {
          dataLabels: {
            enabled: true,
            color: "snow",
            style: {
              textOutline: "none",
            },
          },
        },
      },
      series: [
        {
          name: "Bytes of code",
          data: langs.value,
        },
      ],
    }));

    const gifToLoad = (image) => require(`@/assets/${image}.gif`);

    return {
      LANGS: computed(() => store.state.REPO_LANGS),
      chartOptions,
      gifToLoad
    };
  },
};
</script>

<style scoped>
article {
  min-height: 310px;
}

h3 {
  text-align: center;
  margin-bottom: 1rem;
}

img {
  width: 100%;
}
</style>
