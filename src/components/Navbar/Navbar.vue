<template>
  <div class="py-3 font-medium text-[14px]">
    <router-link
      v-for="navRoute in navRoutes"
      :key="navRoute.name"
      class="bg-[var(--buttonClick)] hover:bg-[var(--backgroundColor)] m-2 px-5 py-3 rounded-[8px] hover:rounded-3xl font-bold text-[16px]/normal text-[var(--backgroundColor)] hover:text-[var(--buttonClick)] transition-all hover:transition-all hover:duration-500 hover:ease-in-out"
      :to="navRoute.path"
      >{{ navRoute.name }}</router-link
    >
  </div>
</template>

<script setup lang="ts">
const navRoutes = [
  {
    path: '/',
    name: 'Home',
  },
  {
    path: '/projects',
    name: 'Projects',
  },
  {
    path: '/all-categories',
    name: 'Categories',
  },
]
</script>

<style scoped></style>
