<script setup lang="ts">
import { onMounted, reactive } from "vue";

const user = reactive({ email: "", password: "" });

onMounted(() => {
  console.log("componente montado");
});

function login() {
  console.log(user.email, user.password);
}
</script>

<template>
  <div class="login">
    <form class="login-form" action="" @submit.prevent="login">
      <input
        class="login-input"
        type="text"
        placeholder="Email"
        v-model="user.email"
      />
      <input
        class="login-input"
        type="text"
        placeholder="Password"
        v-model="user.password"
      />
      <button class="login-button" type="submit">Log in</button>
    </form>
  </div>
</template>

<style scoped>
.login {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.login-input {
  border: none;
  border-bottom: 2px solid #7159c1;
  height: 28px;
  background: transparent;
  margin: 8px;
  width: 300px;
  transition: 0.5s ease;
  padding: 8px;
  color: grey;
  font-size: 16px;
}

.login-input:focus {
  width: 340px;
  margin: 20px 0px;
  outline: none;
}

.login-button {
  background: #7159c1d9;
  cursor: pointer;
  margin-top: 20px;
  font-size: 16px;
  font-weight: 600;
  width: 80px;
  height: 28px;
  border: none;
  border-bottom: 2px solid #7159c1;
  transition: 0.5s ease;
}
.login-button:hover {
  width: 90px;
  height: 32px;
  font-size: 18px;
}
</style>
