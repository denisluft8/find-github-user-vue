<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/login">Login</RouterLink>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  justify-content: center;
  gap: 20px;
  height: 40px;
}
a {
  color: #7159c1;
  font-size: 20px;
  font-weight: 500;
  background: none;
}
a:hover {
  font-size: 24px;
  transition: 0.5s ease;
}
</style>
