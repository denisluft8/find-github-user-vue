<script setup lang="ts">
import { useUserStore } from "@/stores/users";

const store = useUserStore();
</script>
<template>
  <div class="results">
    <h2>Informações de</h2>
  </div>
</template>
<style>
.results {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
