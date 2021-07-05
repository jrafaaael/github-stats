<template>
  <article>
    <div class="avatar-container">
      <img
        :src="USER_INFO?.avatar_url"
        :alt="`${USER} avatar`"
        class="user-avatar"
      />
    </div>
    <div class="username-container">
      <h3 class="username">
        {{ USER }}
      </h3>
    </div>
    <div class="info-container">
      <div class="box">
        <p class="description">Repos</p>
        <p>
          {{ USER_INFO.public_repos }}
        </p>
      </div>
      <div class="box">
        <p class="description">Followers</p>
        <p>
          {{ USER_INFO.followers }}
        </p>
      </div>
      <div class="box">
        <p class="description">Following</p>
        <p>
          {{ USER_INFO.following }}
        </p>
      </div>
    </div>
    <div class="description-container">
      <p>
        {{ USER_INFO.bio || "no bio added 😭" }}
      </p>
    </div>
    <div class="social-container">
      <a :href="USER_INFO.html_url" target="_blank">
        <icon name="logo-github" />
      </a>
      <a
        v-if="USER_INFO.twitter_username"
        :href="`https://twitter.com/${USER_INFO.twitter_username}`"
        target="_blank"
      >
        <icon name="logo-twitter" />
      </a>
    </div>
  </article>
</template>

<script>
import Icon from "./Icon.vue";

import { useStore } from "vuex";
import { computed } from "@vue/runtime-core";

export default {
  name: "UserInfo",
  components: { Icon },
  setup() {
    const store = useStore();

    return {
      USER: computed(() => store.state.USER),
      USER_INFO: computed(() => store.state.USER_INFO),
    };
  },
};
</script>

<style scoped>
article {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-areas:
    "name name social"
    "avatar info info"
    "description description description";
  gap: 1rem;
}

.avatar-container {
  grid-area: avatar;
}

.user-avatar {
  width: 100%;
  max-width: 90px;
  border-radius: 50%;
}

.username-container {
  grid-area: name;
}

.info-container {
  grid-area: info;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 70px), 1fr));
}

.box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

p:not(.description + p) {
  font-size: 0.75rem;
}

.description + p {
  font-weight: 700;
}

.description-container {
  grid-area: description;
}

.social-container {
  grid-area: social;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1.5rem;
}

svg {
  fill: snow;
}

a:hover svg {
  fill: rgb(113, 162, 202);
}

@media all and (min-width: 600px) {
  article {
    grid-template-columns: auto auto 1fr;
    grid-template-areas:
      "name name social"
      "avatar info info"
      "avatar description description";
  }

  .user-avatar {
    max-width: 105px;
  }

  .description-container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
}

@media all and (min-width: 750px) {
  article {
    grid-template-columns: 1fr;
    grid-template-areas:
      "avatar"
      "name"
      "description"
      "info"
      "social";
    gap: 1.25rem;
  }

  .avatar-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .username {
    text-align: center;
  }

  .social-container {
    justify-content: center;
  }
}
</style>
