<script setup lang="ts">
import { ref, computed } from "vue";
import { useUserStore } from "../stores/users";

const isActive = ref(false);

const store = useUserStore();
const searchUser = ref("");

const handleSearch = () => {
  store.fetchUsers(searchUser.value);
  isActive.value = true;
};

const getUsers = computed(() => {
  return store.getUsers;
});
</script>

<template>
  <div class="search">
    <form action="" @submit.prevent="handleSearch">
      <input
        class="search-input"
        placeholder="Find GitHub User"
        type="text"
        v-model="searchUser"
      />
      <button class="search-button" type="submit">
        <img class="search-img" src="../assets/search.svg" />
      </button>
    </form>
  </div>
  <div class="result" v-if="isActive">
    <div class="result-container">
      <img class="result-img" :src="store.users.avatar_url" alt="" />
      <div>
        <h3 class="result-name">
          Nome:
          <a class="result-link" target="_blank" :href="store.users.html_url">
            {{ store.users.name }}
          </a>
        </h3>
        <h4 class="result-user">Usuário: {{ store.users.login }}</h4>
        <p>{{ store.users.public_repos }} repositórios públicos</p>
        <p>Seguidores: {{ store.users.followers }}  |  Seguindo: {{ store.users.following }}</p>
        <p>Local: {{ store.users.location }}</p>
      </div>
    </div>
  </div>
</template>

<style>
div {
  width: 100%;
}
.search {
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
}
.search-input {
  border: none;
  border-bottom: 2px solid #7159c1;
  height: 28px;
  background: transparent;
  margin: 8px;
  width: 380px;
  transition: 0.5s ease;
  padding: 8px;
  color: grey;
  font-size: 18px;
  padding-top: 8px;
}

.search-input:focus {
  width: 420px;
  margin: 20px 0px;
  outline: none;
}

.search-button {
  background: transparent;
  cursor: pointer;
  border: none;
}

.search-img {
  width: 32px;
  transition: 0.3s ease;
}
.search-img:hover {
  width: 40px;
}
.result {
  width: 100%;
  display: flex;
  justify-content: center;
  transition: color 0.5s, background-color 0.5s;
}
.result-container {
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  width: 500px;
  gap: 20px;
  border: 2px solid #7159c1;
  padding: 12px;
  align-items: center;
  border-radius: 8px;
}
.result-img {
  height: 112px;
  border-radius: 50px;
}
.result-link {
  text-decoration: none;
  color: #808080;
}
.result-link:visited {
  color: #808080;
}
.result-link:hover {
  color: #7159c1;
  transition: 0.3s ease-in;
}
</style>
