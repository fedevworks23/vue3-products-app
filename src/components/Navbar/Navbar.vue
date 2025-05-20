<template>
  <header
    class="flex justify-center shadow-md m-auto font-medium text-[14px] text-center"
  >
    <div class="px-[10px] py-[24px]">
      <router-link
        v-for="navRoute in navRoutes"
        :key="navRoute.name"
        class="bg-[var(--secondary)] hover:bg-[var(--accent)] m-2 p-4 font-bold text-[16px]/normal text-[var(--text)] hover:text-[var(--background)] transition-all hover:transition-all hover:duration-500 hover:ease-in-out"
        :to="navRoute.path"
        >{{ navRoute.name }}</router-link
      >
    </div>
  </header>
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
