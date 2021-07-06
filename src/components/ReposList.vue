<template>
  <article>
    <h2>
      Last {{ REPOS.length > 1 ? `${REPOS.length} repos` : "repo" }} updated
      <tooltip dataTooltip="see all">
        <a
          :href="`https://github.com/${USER}?tab=repositories`"
          target="_blank"
        >
          <icon name="external-link-line" />
        </a>
      </tooltip>
    </h2>
    <ol>
      <li v-for="repo in REPOS" :key="repo.id">
        <div class="container">
          <button @click="changeRepo(repo.name)">
            {{ repo.name }}
          </button>
          <tooltip
            location="left"
            :dataTooltip="moment(repo.updated_at).fromNow()"
          >
            <icon name="time-line" />
          </tooltip>
          <a :href="repo.html_url" target="_blank">
            <icon name="link" />
          </a>
        </div>
      </li>
    </ol>
  </article>
</template>

<script>
import Icon from "./Icon.vue";
import Tooltip from "./Tooltip.vue";

import moment from "moment";

import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";

export default {
  name: "ReposList",
  components: { Icon, Tooltip },
  setup() {
    const store = useStore();

    return {
      USER: computed(() => store.state.USER),
      REPOS: computed(() => store.state.REPOS),
      changeRepo: (repo) => store.dispatch('changeRepo', repo),
      moment: computed(() => moment),
    };
  },
};
</script>

<style scoped>
article {
  height: 310px;
}

h2 {
  margin-bottom: 1rem;
}

h2 a {
  font-size: 1rem;
}

ol {
  height: calc(100% - (0.8rem * 2) - 1.2rem);
  padding-left: calc(1rem + 13px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

button {
  margin-right: auto;
  background-color: transparent;
  border: none;
  font-weight: 700;
  cursor: pointer;
}

svg {
  width: 17px !important;
  height: 17px !important;
  fill: snow;
}

a:hover svg,
span:hover svg {
  fill: rgb(113, 162, 202);
}
</style>
