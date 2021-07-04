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
        {{ USER_INFO.bio }}
      </p>
    </div>
  </article>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "@vue/runtime-core";

export default {
  name: "UserInfo",
  components: {},
  setup() {
    const store = useStore();

    return {
      USER: computed(() => store.state.USER),
      USER_INFO: computed(() => store.state.USER_INFO),
      REPOS: computed(() => store.state.REPOS),
    };
  },
};
</script>

<style scoped>
article {
  width: 100%;
  padding: 0.75rem 1rem;
  background-color: var(--secondary-color);
  border-radius: 10px;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-areas:
    "name ."
    "avatar info"
    "description description";
  gap: 0.5rem 1rem;
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

.username {
  text-align: center;
}

.info-container {
  grid-area: info;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 100px), 1fr));
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

@media all and (min-width: 600px) {
  article {
    grid-template-columns: auto auto 1fr;
    grid-template-areas:
      "avatar name info"
      "avatar description description";
  }

  .user-avatar {
    max-width: 105px;
  }

  .username-container,
  .description-container {
    display: flex;
    align-items: center;
  }

  .username-container {
    justify-content: center;
  }

  .description-container {
    justify-content: start;
  }
}

@media all and (min-width: 750px) {
  article {
    grid-template-columns: 1fr;
    grid-template-areas:
      "avatar"
      "name"
      "info"
      "description";
  }

  .avatar-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
