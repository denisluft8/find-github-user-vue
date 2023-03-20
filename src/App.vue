<script setup lang="ts">
import { RouterView } from "vue-router";
import Menu from "./components/Menu.vue";
</script>

<template>
  <header>
    <Menu />
  </header>
  <section>
    <RouterView />
  </section>
</template>

<style scoped>
header {
  left: 0;
  top: 0;
  width: 100%;
}
section {
  margin: 18px 10px;
}
</style>
